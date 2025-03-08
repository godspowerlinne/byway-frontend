import React, { useRef } from 'react';  // Added useRef import
import { TestimonialCard } from '../utilities/Card';
import { testimonials } from '../utilities/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";

const Testimonials = () => {
    // Added swiperRef to track the Swiper instance
    const swiperRef = useRef(null);

    return (
        <section className="py-16 bg-[#F8FAFC] dark:bg-[#111827]">
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8 xl:px-14">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">What Our Students Say</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Discover how Byway has helped professionals across industries enhance their skills and advance their careers.</p>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    }}
                    loop={true}
                    speed={1000}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="pb-12"
                    // Added this to store the Swiper instance in the ref
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard testimonialcard={testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-end gap-2 mt-6">
                    <button
                        className="bg-[#94A3B8] hover:bg-[#7996c0] dark:bg-[#7e22ce] dark:hover:bg-[#6922a7] rounded-md p-2 px-4 text-white focus:outline-none"
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        className="bg-[#94A3B8] hover:bg-[#7996c0] dark:bg-[#7e22ce] dark:hover:bg-[#6922a7] rounded-md p-2 px-4 text-white focus:outline-none"
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;