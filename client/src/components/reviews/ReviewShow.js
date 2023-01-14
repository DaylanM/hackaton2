import { ListGroup, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from 'react';
import Moment from 'react-moment';
import { ReviewConsumer } from "../../providers/ReviewProvider";
import ReviewForm from './ReviewForm';
import { useParams } from 'react-router-dom';

const ReviewShow = ({ id, review_text, rating, length, deleteReview }) => {
  const [showing, setShow] = useState(false)
  const [editing, setEdit] = useState(false)
  const { movieId } = useParams()

  return(
    <>
      <ListGroup.Item>
        <Row>
          <Col>{review_text}</Col>
          <Col>{rating}</Col>
          <Col>
            <Button variant="primary" onClick={() => setShow(true)}>
              Info
            </Button>
          </Col>
        </Row>
        <Modal show={showing} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <h1 className="text-center">Review Show</h1>
            <p>Review Text: {review_text}</p>
            <p>Rating: {rating}</p>
            <Button variant="primary" onClick={() => setEdit(true)}>
              Edit
            </Button>

            <Modal show={editing} onHide={() => setEdit(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Update Review</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ReviewForm 
                  id={id}
                  review_text={review_text}
                  rating={rating}
                  setEdit={setEdit}
                />
              </Modal.Body>
            </Modal>
            <Button
              onClick={() => deleteReview(movieId, id)}
            >
              Delete
            </Button>
          </Modal.Body>
        </Modal>
      </ListGroup.Item>
    </>
  )
}

const ConnectedReviewShow = (props) => (
  <ReviewConsumer>
    { value => <ReviewShow {...value} {...props} />}
  </ReviewConsumer>
)

export default ConnectedReviewShow;