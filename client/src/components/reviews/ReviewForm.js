import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ReviewConsumer } from '../../providers/ReviewProvider';
import { useParams } from 'react-router-dom';

const ReviewForm = ({ setAdd, addReview, id, review_text, rating, updateReview, setEdit }) => {
  const [review, setReview] = useState({ review_text: '', rating: 0 })
  const { movieId } = useParams();
  
  useEffect( () => {
    if (id) {
      setReview({ review_text, rating })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateReview(movieId, id, review)
      setEdit(false)
    } else {
      addReview(movieId, review)
      setAdd(false)
    }
    setReview({ review_text: '', rating: 0 })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Review Text</Form.Label>
          <Form.Control
            name='review_text'
            placeholder='Review Text'
            value={review.review_text}
            onChange={(e) => setReview({ ...review, review_text: e.target.value })}
            required
          >
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Control 
            name='rating'
            placeholder='Rating'
            value={review.rating}
            onChange={(e) => setReview({ ...review, rating: e.target.value })}
            type='integer'
            max='5'
            required 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedReviewForm = (props) => (
  <ReviewConsumer>
    { value => <ReviewForm {...value} {...props} />}
  </ReviewConsumer>
)

export default ConnectedReviewForm;