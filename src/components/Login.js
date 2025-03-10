import React, { useState } from 'react'
import '../styles/AuthFormStyle.css'
import { Form, Modal, Button } from 'react-bootstrap'
import { ValidateLogin } from '../validations/AuthValidations'
import { login } from '../services/AuthService'
import { useDispatch, useSelector } from 'react-redux'
import {
  toggleLogin,
  toggleRegister,
} from '../services/store/ToggleModelsReducer'

const Login = props => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})
  const { setUsers } = props
  const { showLoginModel } = useSelector(state => state.toggleModels)
  const dispatch = useDispatch()

  const handleSubmit = async e => {
    e.preventDefault()
    const validation = await ValidateLogin({ userName, password })
    if (!validation.isValid) {
      setError(validation.errors)
    } else {
      const result = await login({ userName, password })
      if (result) {
        setUsers(result)
        dispatch(toggleLogin())
        alert('You Successfully Login.')
      } else {
        alert('Login Failed: Wrong Credentials')
      }
      setUserName('')
      setPassword('')
    }
  }

  return (
    <Modal show={showLoginModel} onHide={() => dispatch(toggleLogin())}>
      <Modal.Header closeButton>
        <Modal.Title>Login Form</Modal.Title>
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
            Login
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        Don't have account?
        <Button variant="link" onClick={() => dispatch(toggleRegister())}>
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Login
