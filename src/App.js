import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Gift from './Components//Gift'
import Nav from './Components//Nav'
import Rewads from './Components/Rewads';
import Account from './Components/Account';
import Login from './Components/Login';
import Anytime from './Components/Anytime';
import Order from './Components/Order';
import Pay from './Components/Pay';





function App() {
  return (

    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/gift' element={<Gift />}></Route>
        <Route path='/Rewads' element={<Rewads />}></Route>
        <Route path='/Account' element={<Account />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Anytime' element={<Anytime/>}></Route>
        <Route path='/Order' element={<Order/>}></Route>
        <Route path='/Pay' element={<Pay/>}></Route>

      </Routes>
    </Router>


  )
}

export default App