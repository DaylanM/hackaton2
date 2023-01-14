import { ListGroup, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from 'react';
import Moment from 'react-moment';
import { MovieConsumer } from "../../providers/MovieProvider";
import MovieForm from './MovieForm';
import { useParams } from 'react-router-dom';

const MovieShow = ({ id, movie_name, description, length, deleteMovie }) => {
  const [showing, setShow] = useState(false)
  const [editing, setEdit] = useState(false)
  const { genreId } = useParams()

  return(
    <>
      <ListGroup.Item>
        <Row>
          <Col>{movie_name}</Col>
          <Col>{description}</Col>
          <Col>{length}</Col>
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
            <h1 className="text-center">Movie Show</h1>
            <p>Movie Name: {movie_name}</p>
            <p>Description: {description}</p>
            <p>Length: {length}</p>
            <Button variant="primary" onClick={() => setEdit(true)}>
              Edit
            </Button>

            <Modal show={editing} onHide={() => setEdit(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Update Movie</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <MovieForm 
                  id={id}
                  movie_name={movie_name}
                  description={description}
                  length={length}
                  setEdit={setEdit}
                />
              </Modal.Body>
            </Modal>
            <Button
              onClick={() => deleteMovie(genreId, id)}
            >
              Delete
            </Button>
          </Modal.Body>
        </Modal>
      </ListGroup.Item>
    </>
  )
}

const ConnectedMovieShow = (props) => (
  <MovieConsumer>
    { value => <MovieShow {...value} {...props} />}
  </MovieConsumer>
)

export default ConnectedMovieShow;