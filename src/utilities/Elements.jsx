import { BellDot, Heart, Search, ShoppingCart, User2 } from "lucide-react"
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
        <div className={`flex bg-white dark:bg-[#2c3131] items-center max-w-[600px] min-h-[40px] w-full lg:hidden justify-between relative rounded-lg border border-[#797b7e] dark:border-[#c19bff] overflow-hidden ${isFocus ? ' transform -translate-y-40' : ''}`}>
            <input className='w-full pr-14 px-6 py-3 text-sm placeholder:text-[#334155] dark:placeholder:text-white dark:text-white font-[500] focus:outline-none bg-transparent' type='text' placeholder='Search for courses...' onFocus={() => setIsFucus(true)} onBlur={() => setIsFucus(false)} />
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
export const Button = (btn) =>{
    return(
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