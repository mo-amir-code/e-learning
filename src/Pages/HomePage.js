import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CoursesAndTraining from '../components/CoursesAndTraining'
import Teachers from '../components/Teachers'
import Companies from '../components/Companies'

const HomePage = () => {
  return (
    <div className='' >
      <Header/>
      <div className='max-w-7xl mx-auto' >
      <CoursesAndTraining/>
      <Teachers/>
      <Companies/>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
