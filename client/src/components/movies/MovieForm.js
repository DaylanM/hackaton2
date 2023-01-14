import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NoteConsumer } from '../../providers/NoteProvider';
import { useParams } from 'react-router-dom';

const NoteForm = ({ setAdd, addMovie, id, movie_name, description, length, updateNote, setEdit }) => {
  const [movie, setNote] = useState({ movie_name: '', description: '', length: ''})
  const { genreId } = useParams();
  
  useEffect( () => {
    if (id) {
      setNote({ movie_name, description, length,  })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(genreId, id, movie)
      setEdit(false)
    } else {
      addMovie(genreId, movie)
      setAdd(false)
    }
    setNote({ movie_name: '', description: '', length: ''})
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            name='movie_name'
            value={movie.movie_name}
            onChange={(e) => setNote({ ...movie, movie_name: e.target.value })}
            required
          >
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control 
            name='description'
            value={movie.description}
            onChange={(e) => setNote({ ...movie, description: e.target.value })}
            required
            as="textarea" 
            rows={3} 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Length</Form.Label>
          <Form.Control 
            name='length'
            value={movie.length}
            onChange={(e) => setNote({ ...movie, length: e.target.value })}
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