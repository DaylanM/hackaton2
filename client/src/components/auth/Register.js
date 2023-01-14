import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Button, Container } from 'react-bootstrap';
import Flash from '../shared/Flash';
import { Link } from 'react-router-dom';

const Register = ({ handleRegister, msgs, setMsgs }) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', image: '', email: '', password: '', passwordConfirmation: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if ( user.password === user.passwordConfirmation) {
      handleRegister(user);
      setUser({ first_name: '', last_name: '', image: '', email: '', password: '', passwordConfirmation: '' })
    } else {
      alert('Passwords does not match')
    }
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
      <h1 className='text-center'>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            name='first_name'
            value={user.first_name}
            onChange={(e) => setUser({...user, first_name: e.target.value })}
            required
            placeholder="Enter first name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            name='last_name'
            value={user.last_name}
            onChange={(e) => setUser({...user, last_name: e.target.value })}
            required
            placeholder="Enter Last name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control 
            name='image'
            value={user.image}
            onChange={(e) => setUser({...user, image: e.target.value })}
          />
        </Form.Group>

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

        <Form.Group className="mb-3">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control 
            name='passwordConfirmation'
            value={user.passwordConfirmation}
            onChange={(e) => setUser({...user, passwordConfirmation: e.target.value })}
            required
            type="password" 
            placeholder="Password" 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Link to='/login'>
        Already have a account? Login
      </Link>
    </Container>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedRegister;