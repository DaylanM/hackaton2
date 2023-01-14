import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { MovieConsumer } from '../../providers/MovieProvider';
import { useParams } from 'react-router-dom';

const MovieForm = ({ setAdd, addMovie, id, movie_name, description, length, updateMovie, setEdit }) => {
  const [movie, setMovie] = useState({ movie_name: '', description: '', length: 0})
  const { genreId } = useParams();
  
  useEffect( () => {
    if (id) {
      setMovie({ movie_name, description, length, })
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
    setMovie({ movie_name: '', description: '', length: 0})
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            name='movie_name'
            placeholder='Movie Name'
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
            placeholder='Movie Description'
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
            placeholder='Minutes?'
            value={movie.length}
            onChange={(e) => setMovie({ ...movie, length: e.target.value })}
            type='integer'
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