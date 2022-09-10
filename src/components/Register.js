import React, { useState } from 'react'
import '../styles/AuthFormStyle.css'
import { Form, Modal, Button } from 'react-bootstrap'
import { ValidateRegister } from '../validations/AuthValidations'
import { register } from '../services/AuthService'
import { useDispatch, useSelector } from 'react-redux'
import {
  toggleLogin,
  toggleRegister,
} from '../services/store/ToggleModelsReducer'

const Register = props => {
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})
  const { setUsers } = props
  const { showRegisterModel } = useSelector(state => state.toggleModels)
  const dispatch = useDispatch()

  const handleSubmit = async e => {
    e.preventDefault()
    const validation = await ValidateRegister({ userName, email, password })
    if (!validation.isValid) {
      setError(validation.errors)
    } else {
      const result = await register({ userName, email, password })
      if (result) {
        setUsers(result)
        dispatch(toggleRegister())
        alert('You Successfully Register.')
      } else {
        alert('Register Failed: Wrong Credentials')
      }
      setUserName('')
      setPassword('')
      setEmail('')
    }
  }
  return (
    <Modal show={showRegisterModel} onHide={() => dispatch(toggleRegister())}>
      <Modal.Header closeButton>
        <Modal.Title>Register Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              name="userName"
              placeholder="Enter Username"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              autoComplete="off"
            />
            <Form.Text className="text-danger">{error.userName}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="off"
            />
            <Form.Text className="text-danger">{error.email}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="off"
            />
            <Form.Text className="text-danger">{error.password}</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Register
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        Already have account?
        <Button variant="link" onClick={() => dispatch(toggleLogin())}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Register
