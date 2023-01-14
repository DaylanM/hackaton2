import { Container, Row, Col } from 'react-bootstrap';
import GenreShow from './GenreShow';

const GenreList = ({ genres }) => (
  <Container>
    <Row md='4'>
      { genres.map( c => 
        <Col key={c.id}>
          <GenreShow 
            {...c}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default GenreList;