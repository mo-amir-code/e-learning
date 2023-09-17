import React from 'react'
import Courses from '../components/Courses'
import Teachers from '../components/Teachers'
import StudentReview from '../components/StudentReview'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const CoursePage = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto' >
      <Nav/>
      <Courses/>
      <Teachers/>
      <StudentReview/>
      <div className='flex justify-center items-center' >
      <Link to={'/'} className='py-3 my-4 px-10 rounded-2xl bg-orange-500 text-white font-medium shadow-md' >
        Go Back Home
      </Link>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CoursePage
