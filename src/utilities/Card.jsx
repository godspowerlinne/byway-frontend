import React from "react";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

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
        <div className="border-[1px] border-[#E2E8F0] dark:border-[#867CB8]  rounded-xl p-3">
            {/* Image  */}
            <img src={image} alt="card image" className="w-full object-cover h-[300px] rounded-xl" />
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