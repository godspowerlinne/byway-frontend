import React from 'react'
import { CourseCard } from '../utilities/Card'
import { course } from '../utilities/course'
import { Top_Link } from '../utilities/Elements'

const TopCourses = () => {
    return (
        <section className='bg-[#fff] dark:bg-[#020617]'>
            <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-8 xl:px-14 py-3 font-[500]  text-[#334155] dark:text-white">
                <Top_Link name="Top Courses" />
                {/* Show first 4 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5 mt-10">
                    {course.slice(0, 4).map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopCourses