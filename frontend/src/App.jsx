import React from 'react'
import Home from './Home/home'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import { Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthContext'
import { Navigate } from 'react-router-dom'
const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
     <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses /> : <Navigate to= "/signup" />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App