import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const MovieContext = React.createContext();

export const MovieConsumer = MovieContext.Consumer;

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [msgs, setMsgs] = useState(null)

  const getAllMovies = (genreID) => {
    axios.get(`/api/genre/${genreID}/movies`)
      .then( res => setMovies(res.data) )
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const addMovie = (genreID, movie) => {
    axios.post(`/api/genre/${genreID}/movies`, { movie })
      .then( res => setMovies([...movies, res.data]) )
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const updateMovie = (genreID, id, movie) => {
    axios.put(`/api/genre/${genreID}/movies/${id}`, { movie })
      .then(res => {
        const newUpdatedMovies = movies.map(n => {
          if (n.id === id) {
            return res.data
          } 
          return n
        })
        setMovies(newUpdatedMovies)
      })
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const deleteMovie = (genreID, id) => {
    axios.delete(`/api/genre/${genreID}/movies/${id}`)
      .then( res => setMovies( movies.filter(n => n.id !== id )))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }
  
  return (
    <MovieContext.Provider value={{
      movies,
      setMsgs,
      msgs,
      getAllMovies,
      addMovie,
      updateMovie,
      deleteMovie,
    }}>
      { children }
    </MovieContext.Provider>
  )
}

export default MovieProvider;