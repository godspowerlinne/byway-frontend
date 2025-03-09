import React from 'react'
import Hero from '../components/Hero'
import Statistic from '../components/Statistics'
import TopCategories from '../components/TopCategories'
import TopCourses from '../components/TopCourses'
import PostList from '../components/PostList'
import TopInstructors from '../components/TopInstructors'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div className='bg-white dark:bg-[#020617]'>
      <Hero />
      <Statistic/>
      <TopCategories/>
      <TopCourses/>
      <TopInstructors/>
      <Testimonials/>
      <CTA/>
      <PostList/>
    </div>
  )
}

export default Home