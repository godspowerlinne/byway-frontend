import React from "react";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import QuoteSvg from '../assets/quotes.svg'
export const CourseCard = ({
    image,
    title,
    author,
    rating,
    reviews,
    description,
    price,
}) => {
    return (
        <div className="border-[1px] border-[#E2E8F0] dark:border-[#867CB8]  rounded-xl p-3">
            {/* Image */}
            <img src={image} alt="card image" className="w-full h-auto rounded-xl" />

            {/* card details */}
            <div className="mt-6">
                <h3 className="text-[18px] font-bold capitalize">{title}</h3>
                <p className="text-sm text-[#334155] dark:text-white">By {author}</p>

                <div className="flex items-center justify-start mb-2">
                    <div className="flex items-center justify-start">
                        {/* Read about the Array Object */}
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span key={index}>
                                {index < rating ? <IoStar className="text-[#EAB308]" /> : <IoStarOutline className="text-[#EAB308]" />}
                            </span>
                        ))}
                    </div>
                    <p className="text-[#334155] dark:text-white text-sm ml-3 font-medium">({reviews} reviews)</p>
                </div>
                <p className="text-[#334155] dark:text-white font-light text-[12px]">{description}</p>

                <p className="font-bold text-[20px] text-[#334155] dark:text-white">${price}</p>
            </div>
        </div>
    );
};


export const InstructorCard = (
    {
        image,
        name,
        title,
        rating,
        noOfStudents
    }
) => {
    return (
        <div className="border-[1px] border-[#E2E8F0] dark:border-[#867CB8]  rounded-xl p-3 w-[200px] m-auto">
            {/* Image  */}
            <img src={image} alt="card image" className="w-full object-cover h-[150px] rounded" />
            <div className="flex flex-col items-center justify-center my-6">
                {/* Card details */}
                <h3 className="text-[18px] font-bold capitalize">{name}</h3>
                <p className="text-sm text-[#334155] dark:text-white">{title}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-[#334155] flex items-center gap-1 dark:text-white text-sm font-medium">
                    <IoStar className="text-[#EAB308]" />
                    {rating}
                </p>
                <p className="text-[#334155] dark:text-white text-sm font-medium">{noOfStudents} students</p>
            </div>
        </div>
    )
}


export const TestimonialCard = ({ testimonialcard }) => {
    return (
        <div className="border border-gray-200 dark:border-purple-700 rounded-xl p-6 h-[290px] flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
            <img src={QuoteSvg} alt="quote" className="w-12 h-12 object-contain" />
            <q className="text-sm text-gray-700 dark:text-white flex-grow">{testimonialcard.message}</q>
            <div className="flex items-center gap-3 mt-4">
                <img src={testimonialcard.image} alt={`${testimonialcard.name} profile`} className="w-16 h-16 object-cover rounded-full" />
                <div>
                    <h3 className="text-lg dark:text-white font-bold capitalize">{testimonialcard.name}</h3>
                    <p className="text-xs text-gray-700 dark:text-gray-300">{testimonialcard.title}</p>
                </div>
            </div>
        </div>
    );
};