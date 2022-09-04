import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Menubar from './Menubar'
import history from '../utils/history'
import Home from './home/Home'

const App = () => {
  const [loginModel, showLoginModel] = useState(false)
  const [registerModel, showRegisterModel] = useState(false)
  const [user, setUser] = useState()

  const toggleLoginModel = () => {
    showLoginModel(!loginModel)
    showRegisterModel(false)
  }
  const toggleRegisterModel = () => {
    showRegisterModel(!registerModel)
    showLoginModel(false)
  }
  const setUserData = data => {
    setUser(data)
    localStorage.setItem('user', JSON.stringify(data))
  }
  return (
    <div className="main">
      <Router history={history}>
        <div>
          <Menubar
            user={user}
            login={toggleLoginModel}
            signup={toggleRegisterModel}
          />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/cars" component={Cars} /> */}
            {/* <Route path="/service" component={Service}> /> */}
          </Routes>
        </div>
      </Router>
      <Login
        close={toggleLoginModel}
        show={loginModel}
        showRegister={toggleRegisterModel}
        setUsers={setUserData}
      />
      <Register
        close={toggleRegisterModel}
        show={registerModel}
        showLogin={toggleLoginModel}
        setUsers={setUserData}
      />
    </div>
  )
}
export default App
