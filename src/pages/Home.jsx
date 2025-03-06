import React from 'react'
import Hero from '../components/Hero'
import Statistic from '../components/Statistics'
import TopCategories from '../components/TopCategories'
import TopCourses from '../components/TopCourses'
import PostList from '../components/PostList'

const Home = () => {
  return (
    <div className='bg-white dark:bg-[#020617]'>
      <Hero />
      <Statistic/>
      <TopCategories/>
      <TopCourses/>
      <PostList/>
    </div>
  )
}

export default Home