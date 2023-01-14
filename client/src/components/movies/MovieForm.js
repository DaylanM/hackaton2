import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { MovieConsumer } from '../../providers/MovieProvider';
import { useParams } from 'react-router-dom';

const MovieForm = ({ setAdd, addMovie, id, movie_name, description, length, updateMovie, setEdit }) => {
  const [movie, setMovie] = useState({ movie_name: '', description: '', length: ''})
  const { genreId } = useParams();
  
  useEffect( () => {
    if (id) {
      setMovie({ movie_name, description, length,  })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateMovie(genreId, id, movie)
      setEdit(false)
    } else {
      addMovie(genreId, movie)
      setAdd(false)
    }
    setMovie({ movie_name: '', description: '', length: ''})
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            name='movie_name'
            value={movie.movie_name}
            onChange={(e) => setMovie({ ...movie, movie_name: e.target.value })}
            required
          >
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control 
            name='description'
            value={movie.description}
            onChange={(e) => setMovie({ ...movie, description: e.target.value })}
            required
            as="textarea" 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Length</Form.Label>
          <Form.Control 
            name='length'
            value={movie.length}
            onChange={(e) => setMovie({ ...movie, length: e.target.value })}
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

const ConnectedMovieForm = (props) => (
  <MovieConsumer>
    { value => <MovieForm {...value} {...props} />}
  </MovieConsumer>
)

export default ConnectedMovieForm;