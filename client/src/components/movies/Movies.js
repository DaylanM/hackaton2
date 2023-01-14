import { useParams } from 'react-router-dom';
import { MovieConsumer } from '../../providers/MovieProvider';
import { useEffect, useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import MovieList from './MovieList';
import Flash from '../shared/Flash';
import MovieForm from './MovieForm';

const Movies = ({ getAllMovies, movies, msgs, setMsgs }) => {
  const { genreId } = useParams()
  const [adding, setAdd] = useState(false)

  useEffect(() => {
    getAllMovies(genreId)
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
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MovieForm setAdd={setAdd} />
        </Modal.Body>
      </Modal>
      <h1>All Movies</h1>
      <MovieList movies={movies} />
    </Container>
  )
}

const ConnectedMovies = (props) => (
  <MovieConsumer>
    { value => <Movies {...value} {...props} />}
  </MovieConsumer>
)

export default ConnectedMovies;