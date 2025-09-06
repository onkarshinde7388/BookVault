import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'
import list from  "../list.json"

const Courses = () => {
 
  return (
    <>
    <div className='dark:bg-slate-900 dark: text-white'>
    <Navbar />
    <div className='min-h-screen'>
     <Course />
    </div>
    <Footer />  
    </div>
    </>

  )
}

export default Courses