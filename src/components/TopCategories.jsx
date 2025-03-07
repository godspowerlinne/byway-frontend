import React from "react";
import Development from "../assets/Development.svg";
import Astrology from "../assets/Astrology.svg";
import Marketing from "../assets/Marketing.svg";
import Physics from "../assets/Physics.svg";
import { Top_Contents, Top_Link } from "../utilities/Elements";

const TopCategories = () => {
    return (
        <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-8 xl:px-14 py-3 font-[500] bg-[#fff] dark:bg-[#020617] text-[#334155] dark:text-white">
            <Top_Link name="Top Categories" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                <Top_Contents
                    img={Astrology}
                    title="Astrology"
                    paragraph="11 Courses"
                    titleStyle="text-[20px] dark:text-white"
                    paraStyle="hidden lg:block"
                />
                <Top_Contents
                    img={Development}
                    title="Development"
                    paragraph="12 Courses"
                    titleStyle="text-[20px] dark:text-white"
                    paraStyle="hidden lg:block"
                />
                <Top_Contents
                    img={Marketing}
                    title="Marketing"
                    paragraph="12 Courses"
                    titleStyle="text-[20px] dark:text-white"
                    paraStyle="hidden lg:block"
                />
                <Top_Contents
                    img={Physics}
                    title="Physics"
                    paragraph="14 Courses"
                    titleStyle="text-[20px] dark:text-white"
                    paraStyle="hidden lg:block"
                />
            </div>
        </div>
    );
};

export default TopCategories;