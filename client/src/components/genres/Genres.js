import { GenreConsumer } from "../../providers/GenreProvider";
import GenreList from './GenreList';
import { useState, useEffect } from "react";
import { Container, Modal, Button } from 'react-bootstrap';
import GenreForm from './GenreForm';
import { Link } from 'react-router-dom';

const Genres = ({ genres, getAllGenres }) => {
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllGenres()
  }, [])

  return (
    <Container>
      
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Genre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GenreForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>My Genres</h1>
      <GenreList 
        genres={genres}
      />
    </Container>
  )
}

const ConnectedGenres = (props) => (
  <GenreConsumer>
    { value => <Genres {...value} {...props} />}
  </GenreConsumer>
)

export default ConnectedGenre;