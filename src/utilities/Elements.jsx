import { ArrowRight, BellDot, Heart, Search, ShoppingCart, User2 } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

// Search Bar for larger screens 
export const SearchBar = () => {
    return (
        <div className='lg:flex items-center md:max-w-[400px] xl:max-w-[520px] max-h-[40px] w-full hidden justify-between relative rounded-lg border border-[#797b7e] dark:border-[#c19bff] dark:text-white overflow-hidden'>
            <input className='w-full pl-14 px-6 py-3 text-sm placeholder:text-[#334155] dark:placeholder:text-[#ffffff] bg-transparent dark:bg-[#2c3131] font-[500] focus:outline-none' type='text' placeholder='Search for courses...' />
            <Search className='absolute left-4 top-0 translate-y-[45%] text-gray-600 dark:text-[#c19bff] cursor-pointer transition-all duration-300 hover:translate-y-[40%] hover:scale-105' />
        </div>
    )
}

// Search Bar for smaller screens 
export const SearchBar2 = () => {
    const [isFocus, setIsFucus] = useState(false);
    return (
        <div className={`flex bg-white dark:bg-[#2c3131] items-center max-w-[600px] min-h-[40px] w-full lg:hidden justify-between relative rounded-lg border border-[#797b7e] dark:border-[#c19bff] overflow-hidden `}>
            <input className='w-full pr-14 px-6 py-3 text-sm placeholder:text-[#334155] dark:placeholder:text-white dark:text-white font-[500] focus:outline-none bg-transparent' type='text' placeholder='Search for courses...' />
            <Search className="absolute right-4 top-0 translate-y-[45%] text-gray-600 dark:text-[#c19bff] cursor-pointer transition-all duration-300 hover:translate-y-[40%] hover:scale-105" />
        </div>
    )
}

// User Access Hub (for authenticated users) 
export const AuthUserAccessHub = () => {
    const user = JSON.parse(localStorage.getItem('userData'));
    return (
        <div className='flex items-center gap-4 sm:gap-8 flex-col w-full lg:w-fit lg:flex-row'>
            <Link to="/favorites" className="group">
                <Heart className='text-[#64748B] dark:text-[#c19bff] w-6 h-6 group-hover:scale-105 group-hover:translate-y-[-2px] transition-all' />
            </Link>
            <Link to="/shopping-cart" className="group">
                <ShoppingCart className='text-[#64748B] dark:text-[#c19bff] w-6 h-6 group-hover:scale-105 group-hover:translate-y-[-2px] transition-all' />
            </Link>
            <Link to="/notifications" className="group">
                <BellDot className='text-[#64748B] dark:text-[#c19bff] w-6 h-6 group-hover:scale-105 group-hover:translate-y-[-2px] transition-all' />
            </Link>
            <Link to="/user-profile" className="group">
                {user && (
                    user.profilePicture ? (
                        <img
                            src={user.profilePicture}
                            alt={`${user.firstname}'s profile`}
                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 dark:border-[#c19bff] group-hover:scale-105 transition-all"
                        />
                    ) : (
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#6f5400] dark:bg-[#8a6d00] font-bold text-white group-hover:scale-105 transition-all">
                            <User2 />
                        </span>
                    )
                )}
            </Link>
        </div>
    )
}

// User Access Hub (for guests) 
export const GuestUserAccessHub = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-8 w-full lg:w-fit'>
            <Link to="/shopping-cart" className="group">
                <ShoppingCart className='text-[#64748B] dark:text-[#c19bff] w-8 h-8 group-hover:scale-105 group-hover:translate-y-[-2px] transition-all' />
            </Link>
            <Link
                to="/login"
                className="w-full lg:w-fit rounded lg:rounded-none text-center p-[10px] border border-[#64748B] dark:border-[#c19bff] 
                bg-white dark:bg-[#2c3131] text-black dark:text-white 
                hover:bg-[#64748B] hover:text-white 
                dark:hover:bg-[#c19bff] dark:hover:text-black 
                transition-all duration-300"
            >
                Login
            </Link>
            <Link
                to="/signup"
                className="w-full lg:w-fit rounded lg:rounded-none text-center p-[10px] border border-[#64748B] 
                bg-[#64748B] text-white 
                dark:bg-[#c19bff] dark:text-black 
                hover:bg-white hover:text-[#64748B] 
                dark:hover:bg-[#2c3131] dark:hover:text-white 
                transition-all duration-300"
            >
                Sign Up
            </Link>
        </div>
    )
}


// Reusuable button component
export const Button = (btn) => {
    return (
        <button className={`${btn.BtnStyle} px-6 py-[10px] rounded-md text-sm font-medium transition-all duration-300`} onClick={btn.onClick}>
            {btn.BtnText}
        </button>
    )
}

// // Reusable input component
// export const Input = (input) => {
//     return (
//         <input
//             className={`block  ${input.error ? 'border-red-500' : ''}`}
//             id={input.id}
//             type={input.type}
//             placeholder={input.placeholder}
//             value={()=>input.value}
//             onChange={input.onChange}
//         />
//     )
// }

export const Top_Link = (Top) => {
    return (
        <div className="flex justify-between mb-5 items-center">
            <h2 className="text-[24px] font-[600] text-[#334155] dark:text-white">{Top.name}</h2>
            <Button
                BtnText={
                    <Link to="#" className="text-[14px] text-[#3B82F6] dark:text-[#109191] hover:text-[#109191] dark:hover:text-[#3B82F6]">
                        See all
                    </Link>
                }
                BtnStyle={"w-[94px] h-[48px] rounded-md bg-white dark:bg-[#020617]"}
            />
        </div>
    )
}

export const Top_Contents = (Content) => {
    return (
        <div className="border-[1px] border-[#E2E8F0] dark:border-[#867CB8] p-5 flex flex-col gap-4 rounded-md justify-center items-center min-h-[140px] w-full m-auto lg:max-w-[315px] cursor-pointer hover:bg-[#DBF4FA] dark:hover:bg-[#3b2676] hover:scale-105 duration-300 bg-white dark:bg-[#111827]">
            <img src={Content.img} alt={Content.title} className={`${Content.imgStyle}`} />
            <h3 className={`${Content.titleStyle} font-[600] text-[#334155] dark:text-white`}>{Content.title}</h3>
            <p className={`${Content.paraStyle} text-[#334155] dark:text-[#bcc3cf]`}>
                {Content.paragraph}
            </p>
            {Content.description}
        </div>
    );
};

// Social login 
export const Social = (social) => {
    return (
        <button className="min-w-[220px] w-full min-h-[50px] flex items-center justify-center gap-2 border border-[#B2B5C4] dark:border-[#867CB8]  rounded bg-white dark:bg-black">
            {social.icon}
            <span className={`${social.textStyle} text-[14px]`}>{social.name}</span>
        </button>
    )
}

export const CTA_Content = (CTA) => {
    return (
        <>
            <img src={CTA.image} alt={CTA.title} className="w-full max-w-[400px]" />
            <div className="flex flex-col gap-5 max-w-[550px]">
                <h2 className="text-[20px] font-[600] text-black dark:text-white">{CTA.title}</h2>
                <p className="text-base text-[#1D2939] dark:text-white">{CTA.paragraph}</p>
                <button className="w-full lg:w-fit rounded-md p-2 sm:p-[14px] border border-[#522798] bg-[#000000] font-bold text-xs text-white dark:bg-[#522798] dark:hover:bg-[#7435d8] items-center justify-center transition-all flex gap-2 duration-300 group">
                    {CTA.btnText}
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </button>
            </div>
        </>
    )
}