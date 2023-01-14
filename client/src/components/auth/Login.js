import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Button, Container } from 'react-bootstrap';
import Flash from '../shared/Flash';
import { Link } from 'react-router-dom';

const Login = ({ handleLogin, msgs, setMsgs }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user);
    setUser({ email: '', password: '' })
  }

  return (
    <Container>
      { msgs ?
        <Flash
          variant={msgs.variant}
          msg={msgs.msg}
          setErrors={setMsgs}
        />
        :
        null
      }
      <h1 className='text-center'>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            name='email'
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value })}
            required
            type="email" 
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            name='password'
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value })}
            required
            type="password" 
            placeholder="Password" 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Link to='/register'>
        No account yet? Sign Up!
      </Link>
    </Container>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedLogin;