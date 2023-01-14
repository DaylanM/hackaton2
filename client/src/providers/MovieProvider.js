import React, { useState } from 'react';
import axios from 'axios';

export const MovieContext = React.createContext();

export const MovieConsumer = MovieContext.Consumer;

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [msgs, setMsgs] = useState(null)

  const getAllMovies = (genreId) => {
    axios.get(`/api/genres/${genreId}/movies`)
      .then( res => setMovies(res.data) )
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const addMovie = (genreId, movie) => {
    axios.post(`/api/genres/${genreId}/movies`, { movie })
      .then( res => setMovies([...movies, res.data]) )
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const updateMovie = (genreId, id, movie) => {
    axios.put(`/api/genres/${genreId}/movies/${id}`, { movie })
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

  const deleteMovie = (genreId, id) => {
    axios.delete(`/api/genres/${genreId}/movies/${id}`)
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