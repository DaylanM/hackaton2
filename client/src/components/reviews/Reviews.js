import { useParams } from 'react-router-dom';
import { ReviewConsumer } from '../../providers/ReviewProvider';
import { useEffect, useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import ReviewList from './ReviewList';
import Flash from '../shared/Flash';
import ReviewForm from './ReviewForm';

const Reviews = ({ getAllReviews, reviews, msgs, setMsgs }) => {
  const { reviewId } = useParams()
  const [adding, setAdd] = useState(false)

  useEffect(() => {
    getAllReviews(reviewId)
  }, [])

  return (
    <Container>
      { msgs ?
        <Flash
          variant={msgs.variant}
          msg={msgs.msg}
          setErrors={setMsgs}
        />
        :
        null
      }
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReviewForm setAdd={setAdd} />
        </Modal.Body>
      </Modal>
      <h1>All Reviews</h1>
      <ReviewList reviews={reviews} />
    </Container>
  )
}

const ConnectedReviews = (props) => (
  <ReviewConsumer>
    { value => <Reviews {...value} {...props} />}
  </ReviewConsumer>
)

export default ConnectedReviews;