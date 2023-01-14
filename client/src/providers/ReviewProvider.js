import React, { useState } from 'react';
import axios from 'axios';

export const ReviewContext = React.createContext();

export const ReviewConsumer = ReviewContext.Consumer;

const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([])
  const [msgs, setMsgs] = useState(null)

  const getAllReviews = (movieId) => {
    axios.get(`/api/movies/${movieId}/reviews`)
      .then( res => setReviews(res.data) )
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const addReview = (movieId, review) => {
    axios.post(`/api/movies/${movieId}/reviews`, { review })
      .then( res => setReviews([...reviews, res.data]) )
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const updateReview = (movieId, id, review) => {
    axios.put(`/api/movies/${movieId}/reviews/${id}`, { review })
      .then(res => {
        const newUpdatedReviews = reviews.map(n => {
          if (n.id === id) {
            return res.data
          } 
          return n
        })
        setReviews(newUpdatedReviews)
      })
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const deleteReview = (movieId, id) => {
    axios.delete(`/api/movies/${movieId}/reviews/${id}`)
      .then( res => setReviews( reviews.filter(n => n.id !== id )))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }
  
  return (
    <ReviewContext.Provider value={{
      reviews,
      setMsgs,
      msgs,
      getAllReviews,
      addReview,
      updateReview,
      deleteReview,
    }}>
      { children }
    </ReviewContext.Provider>
  )
}

export default ReviewProvider;