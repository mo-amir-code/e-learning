import React from 'react'
import Courses from '../components/Courses'
import Teachers from '../components/Teachers'
import StudentReview from '../components/StudentReview'
import Footer from '../components/Footer'

const CoursePage = () => {
  return (
    <div>
      <Courses/>
      <Teachers/>
      <StudentReview/>
      <Footer/>
    </div>
  )
}

export default CoursePage
