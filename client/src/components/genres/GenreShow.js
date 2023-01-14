import { Card, Button, Modal, Container, Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { GenreConsumer } from '../../providers/GenreProvider';

const GenreShow = ({ genre_des, genre_type, deleteGenre }) => {
  const [showing, setShow] = useState(false)

  return(
    <>
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={avatar} height='140px' />
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
                <h1>{Genre}</h1>
                <p>Genre Description :
                  { breed ? breed : "Unknown Breed" }
                </p>
                <p>Registry: { registry ? registry : "Unknown Registry" }</p>
                <p>D.O.B: { dob ? <Moment format='MM-DD-YY'>{dob}</Moment> : "Unknown Date of Birth" }</p>
                <Link
                  to={`/${id}/updateGenre`}
                  state={{
                    id,
                    name,
                    breed,
                    registry,
                    dob,
                    avatar,
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
                  to={`/${id}/notes`}
                >
                  <Button>Notes</Button>
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