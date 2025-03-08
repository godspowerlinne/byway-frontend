import React from "react";

const HomeStatistics = (text) => {

    return (
        <>
            <div className="w-[192px] text-center h-[69px]">
                <h2 className="text-[32px] font-[600] dark:text-white">{text.content}</h2>
                <p className="text-[14px] dark:text-[#CBD5E1]">{text.description}</p>
            </div>
            <div className={`${text.hidden} h-[3px] md:h-[53px] w-[50%] md:w-[3px] bg-[#E2E8F0] dark:bg-[#867CB8]`}></div>
        </>
    );
};

const Statistic = () => {

    return (
        <section className="bg-[#F8FAFC] dark:bg-[#111827]">
            <div className="max-w-screen-2xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 xl:px-14 font-[500] py-12 lg:py-0 gap-4 lg:h-[149px] text-[#334155] dark:text-white">
                <HomeStatistics content="250+" description="Expert-curated courses." />
                <HomeStatistics content="1000+" description="Hours of learning content." />
                <HomeStatistics content="15+" description="Fields of expertise." />
                <HomeStatistics content="2400+" description="Successful learners." hidden={`hidden`} />
            </div>
        </section>
    );
};

export default Statistic;