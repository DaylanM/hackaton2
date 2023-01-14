import { Image, Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <Image 
      src='https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80'
      alt='home'
      width='50%'
      position='center'
    />
    <Container>
      <Row>
        <Col>
          <h1>Movies</h1>
        </Col>
        <Col>
          <p>Signup or login to your account!</p>
          <Row>
            <Col>
              <Link to='/register'>
                <Button>
                  SignUp
                </Button>
              </Link>
            </Col>
            <Col>
              <Link to='/login'>
                <Button>
                  Login
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <br />
    <Container>
      <Row>
        <Col>
          <Image 
            src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt='head2'
            width='50%'
          />
        </Col>
        <Col>
          <h1>Find your movie!</h1>
          <p>You can also find movie reviews!</p>
        </Col>
      </Row>
    </Container>
    <br />
    <h1>FAQ</h1>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Do you have reviews</Accordion.Header>
        <Accordion.Body>
          Yes we do!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How many movies?</Accordion.Header>
        <Accordion.Body>
          All of them!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Whats a good movie?</Accordion.Header>
        <Accordion.Body>
          I don't know pick one.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <br />
    <br />
    <br />
    <br />
  </>
)

export default Home;