import React from 'react'
import { CTA_Content } from '../utilities/Elements'
import ctaimg from '../assets/CTA_female.png'
import ctaimg2 from '../assets/CTA_male.png'

const CTA = () => {
    return (
        <div className='max-w-screen-2xl w-full mx-auto px-4 md:px-8 xl:px-14 py-8 font-[500] bg-white dark:bg-[#020617] '>
            <div className='flex flex-col lg:flex-row gap-8 items-center justify-between mb-12'>
                <CTA_Content
                    image={ctaimg}
                    title="Become an Instructor"
                    paragraph="Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love."
                    btnText="Start Your Instructor Journey" />
            </div>
            <div className='flex flex-col  gap-8 lg:flex-row-reverse items-center justify-between'>
                <CTA_Content
                    image={ctaimg2}
                    title="Transform your life through education"
                    paragraph="Learners around the world are launching new careers, advancing in their fields, and enriching their lives."
                    btnText="Checkout Courses" />
            </div>
        </div>
    )
}

export default CTA