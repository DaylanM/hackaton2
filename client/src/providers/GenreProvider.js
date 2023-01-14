import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const GenreContext = React.createContext();
export const GenreConsumer = GenreContext.Consumer;

const GenreProvider = ({ children }) => {
  const [genres, setGenres] = useState([])
  const [msgs, setMsgs] = useState()
  const navigate = useNavigate()

  const getAllGenres = () => {
    axios.get('/api/genres')
      .then( res => setGenres(res.data))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const addGenre = (genre) => {
    axios.post('/api/genres', { genre })
      .then( res => setGenres([...genres, res.data]))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const updateGenre = (id, genre) => {
    axios.put(`/api/genres/${id}`, { genre })
      .then(res => {
        const newUpdatedGenres = genres.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setGenres(newUpdatedGenres)
        navigate('/genre')
      })
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const deleteGenre = (id) => {
    axios.delete(`/api/genres/${id}`)
      .then( res => setGenres( genres.filter(c => c.id !== id)))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  return (
    <GenreContext.Provider value={{
      genres, 
      getAllGenres,
      msgs,
      setMsgs,
      addGenre,
      updateGenre,
      deleteGenre,
    }}>
      { children }
    </GenreContext.Provider>
  )
}

export default GenreProvider;