import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Menubar from './Menubar'
import history from '../utils/history'
import Home from './home/Home'
import Cars from './cars/Cars'

const App = () => {
  const [user, setUser] = useState()

  const setUserData = data => {
    setUser(data)
    localStorage.setItem('user', JSON.stringify(data))
  }
  return (
    <div className="main">
      <Router history={history}>
        <div>
          <Menubar user={user} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            {/* <Route path="/service" element={Service}> /> ** */}
          </Routes>
        </div>
      </Router>
      <Login setUsers={setUserData} />
      <Register setUsers={setUserData} />
    </div>
  )
}
export default App
