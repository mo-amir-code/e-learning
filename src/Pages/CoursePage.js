import React from 'react'
import Courses from '../components/Courses'
import Teachers from '../components/Teachers'
import StudentReview from '../components/StudentReview'
import Footer from '../components/Footer'

const CoursePage = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto' >
      <Courses/>
      <Teachers/>
      <StudentReview/>
      </div>
      <Footer/>
    </div>
  )
}

export default CoursePage
