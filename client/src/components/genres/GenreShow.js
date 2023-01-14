import { Card, Button, Modal, Container, Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GenreConsumer } from '../../providers/GenreProvider';

const GenreShow = ({ genre_des, genre_type, deleteGenre, id}) => {
  const [showing, setShow] = useState(false)

  return(
    <>
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" height='140px' />
        <Card.Body>
          <Card.Title>{genre_des}</Card.Title>
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
                <h4>{genre_des}</h4>
                <Link
                  to={`/${id}/updateGenre`}
                  state={{
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