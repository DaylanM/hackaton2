import { useState, useEffect } from 'react';
import { GenreConsumer } from '../../providers/GenreProvider';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

const GenreForm = ({ setAdd, addGenre, updateGenre }) => {
  const [genre, setGenre] = useState({ genre_des: '', genre_type: '' })
  const location = useLocation()
  const { id } = useParams()

  useEffect( () => {
    if (id) {
      const { genre_des, genre_type } = location.state
      setGenre({ genre_des, genre_type })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateGenre(id, genre)
    } else {
      addGenre(genre)
      setAdd(false)
    }
    setGenre({ genre_des: '', genre_type: '' })
  }

  return(
    <>
      { id ? <h1>Update Genre</h1> : null}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Genre Type</Form.Label>
          <Form.Control 
            name='genre_type'
            placeholder='Genre'
            value={genre.genre_type}
            onChange={(e) => setGenre({ ...genre, genre_type: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            name='genre_des'
            placeholder="Genre Description"
            value={genre.genre_des}
            onChange={(e) => setGenre({ ...genre, genre_des: e.target.value})}
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

const ConnectedGenreForm = (props) => (
  <GenreConsumer>
    { value => <GenreForm {...props} {...value} />}
  </GenreConsumer>
)

export default ConnectedGenreForm;