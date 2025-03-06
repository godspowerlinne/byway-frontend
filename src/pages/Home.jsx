import React from 'react'
import Hero from '../components/Hero'
import Statistic from '../components/Statistics'

const Home = () => {
  return (
    <div className='bg-white dark:bg-[#020617]'>
      <Hero />
      <Statistic/>
    </div>
  )
}

export default Home