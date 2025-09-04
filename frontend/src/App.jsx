import React from 'react'
import Home from './Home/home'
import Courses from './courses/Courses'
import Signup from './components/SIgnup'
import { Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    
  )
}

export default App