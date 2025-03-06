import React from "react";
import HeroImg1 from "/src/assets/byway_header_1.png";
import HeroImg2 from "/src/assets/byway_header_2.png";
import HeroImg3 from "/src/assets/byway_header_3.png";
import HeroImg4 from "/src/assets/byway_header_4.png";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Button } from "../utilities/Elements";

const Hero = () => {
    const slides = [
        {
            img: HeroImg1,
            title: "Your Journey to Knowledge Starts Here",
            text: "Welcome to Byway, where limitless opportunities await. Dive into a world of learning that empowers you to grow, innovate, and lead. Take the first step today and become an educator who inspires a generation.",
            button: "Start Teaching Now",
        },
        {
            img: HeroImg2,
            title: "Empower Growth, Empower Minds",
            text: "Transform lives with knowledge. At Byway, we believe in the power of education to shape a better future. Join us in sharing your expertise and making a lasting impact.",
            button: "Join Us",
        },
        {
            img: HeroImg3,
            title: "Learn, Grow, Inspire",
            text: "Byway is your gateway to unlimited learning. As an instructor, you become the guide to knowledge, shaping the minds of tomorrow. Let your teaching journey begin here.",
            button: "Start Your Adventure",
        },
        {
            img: HeroImg4,
            title: "Unlock Your Potential with Byway",
            text: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success.",
            button: "Start your instructor journey",
        },
    ];

    const HeroContent = ({ slide }) => {
        return (
            <div className="w-full flex flex-col lg:flex-row justify-between gap-8 items-center">
                <div className="max-w-[590px] flex flex-col gap-4">
                    <h1 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold capitalize leading-tight text-[#1E293B] dark:text-[#F1F5F9]">
                        {slide.title}
                    </h1>
                    <p className="text-[#334155] dark:text-[#CBD5E1]">{slide.text}</p>
                    <Button
                        BtnText={slide.button}
                        BtnStyle="bg-[#3B82F6] dark:bg-[#410B65] text-white w-full lg:w-max justify-center lg:justify-start rounded-md mt-3 lg:mt-6 hover:bg-blue-700 dark:hover:bg-purple-700"
                    />
                </div>
                <img
                    src={slide.img}
                    alt="Mentor Holding Class Notes"
                    className="max-w-[500px] w-full"
                />
            </div>
        );
    };

    return (
        <div className="px-4 pt-20 md:px-8 xl:px-14 py-8 font-[500] max-w-screen-2xl w-full mx-auto bg-white dark:bg-[#020617]">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <HeroContent slide={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;