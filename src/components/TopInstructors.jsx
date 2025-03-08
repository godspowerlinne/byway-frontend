import React from 'react'
import { Top_Link } from '../utilities/Elements'
import { instructors } from '../utilities/instuctors'
import { InstructorCard } from '../utilities/Card'

const TopInstructors = () => {
    return ( <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-8 xl:px-14 py-3 font-[500] bg-[#fff] dark:bg-[#020617] text-[#334155] dark:text-white">
                <Top_Link name="Top Instructors" />
                {/* Show first 4 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5 mt-10">
                    {instructors.slice(0, 4).map((instructor, index) => (
                        <InstructorCard key={index} {...instructor} />
                    ))}
                </div>
            </div>)
}

export default TopInstructors