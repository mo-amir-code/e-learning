import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CoursesAndTraining from '../components/CoursesAndTraining'
import Teachers from '../components/Teachers'
import Companies from '../components/Companies'
import StudentReview from '../components/StudentReview'
import SocialMedia from '../components/SocialMedia'

const HomePage = () => {
  return (
    <div className='relative' >
      <Header/>
      <div className='max-w-7xl mx-auto' >
      <CoursesAndTraining/>
      <Teachers/>
      <Companies/>
      <StudentReview/>
      {/* <SocialMedia/> */}
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
