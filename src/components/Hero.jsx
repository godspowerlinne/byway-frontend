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

const HomeHero = () => {
    const HeroText = () => {
        return (
            <div className="max-w-[590px] flex flex-col gap-4">
                <h1 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold capitalize leading-tight text-[#1E293B] dark:text-[#F1F5F9]">
                    Unlock Your Potential with Byway
                </h1>
                <p className="text-[#334155] dark:text-[#CBD5E1]">
                    Welcome to Byway, where learning knows no bounds. We believe that
                    education is the key to personal and professional growth, and we're
                    here to guide you on your journey to success.
                </p>
                <Button
                    BtnText="Start your instructor journey"
                    BtnStyle="bg-[#3B82F6] dark:bg-[#410B65] text-white w-full lg:w-max justify-center lg:justify-start rounded-md mt-3 lg:mt-6 hover:bg-blue-700 dark:hover:bg-purple-700"
                />
            </div>
        )
    }

    const HeroContent = (heroImg) => {
        return (
            <div className="w-full flex flex-col lg:flex-row justify-between gap-8 items-center">
                <HeroText />
                <img src={heroImg.HeroImg} alt="Mentor Holding Class Notes" className="max-w-[500px] w-full" />
            </div>
        )
    }

    return (
        <div className="px-4 md:px-8 xl:px-14 py-8 font-[500] max-w-screen-2xl w-full mx-auto  bg-white dark:bg-[#020617]">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
            >
                <SwiperSlide>
                    <HeroContent HeroImg={HeroImg1} />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroContent HeroImg={HeroImg2} />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroContent HeroImg={HeroImg3} />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroContent HeroImg={HeroImg4} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default HomeHero;