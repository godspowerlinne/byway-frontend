import React from 'react'
import { Top_Link } from '../utilities/Elements'
import { instructors } from '../utilities/instuctors'
import { InstructorCard } from '../utilities/Card'

const TopInstructors = () => {
    return (
        <section className='bg-[#fff] dark:bg-[#020617] pb-8'>
            <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-8 xl:px-14 py-3 font-[500] text-[#334155] dark:text-white">
                <Top_Link name="Top Instructors" />
                {/* Show first 4 cards */}
                <div className="flex flex-wrap gap-8 sm:gap-2 mt-10">
                    {instructors.slice(0, 5).map((instructor, index) => (
                        <InstructorCard key={index} {...instructor} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopInstructors