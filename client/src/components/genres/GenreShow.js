import { Card, Button, Modal, Container, Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { GenreConsumer } from '../../providers/GenreProvider';

const GenreShow = ({ id, genre_type, genre_des, deleteGenre }) => {
  const [showing, setShow] = useState(false)

  return(
    <>
      <Card style={{ width: '10rem' }}>
        <Card.Body>
          <Card.Title>{genre_type}</Card.Title>
          <Button variant="outline-dark" onClick={() => setShow(true)}>
            Show
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showing} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Container>
                <h1>{genre_type}</h1>
                <Link
                  to={`/${id}/updateGenre`}
                  state={{
                    id,
                    genre_type,
                    genre_des,
                  }}
                >
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={() => deleteGenre(id)}
                >
                  Delete
                </Button>
                <Link
                  to={`/${id}/movies`}
                >
                  <Button>Movies</Button>
                </Link>
              </Container>
            </Col>

          </Row>
        </Modal.Body>
      </Modal>
      <br />
    </>
  )
}

const ConnectedGenreShow = (props) => (
  <GenreConsumer>
    { value => <GenreShow {...props} {...value} />}
  </GenreConsumer>
)

export default ConnectedGenreShow;