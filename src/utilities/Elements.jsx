import { BellDot, Heart, Search, ShoppingCart, User2 } from "lucide-react"
import { Link } from "react-router-dom"

// Search Bar for larger screens
export const SearchBar = () => {
    return (
        <div className='lg:flex items-center max-w-[600px] min-h-[40px] w-full hidden  justify-between relative rounded-lg border border-[#797b7e] overflow-hidden'>
            <input className='w-full pl-14 px-6 py-3 text-sm placeholder:text-[#334155] font-[500] focus:outline-none' type='text' placeholder='Search for courses...' />
            <Search className='absolute left-4 top-0 translate-y-[45%] cursor-pointer transition-all duration-300 hover:translate-y-[40%] hover:scale-105' />
        </div>
    )
}

// Search Bar for smaller screens
export const SearchBar2 = () => {
    return (
        <div className='flex bg-white items-center max-w-[600px] min-h-[40px] w-full lg:hidden  justify-between relative rounded-lg border border-[#797b7e] overflow-hidden'>
            <input className='w-full pr-14 px-6 py-3 text-sm placeholder:text-[#334155] font-[500] focus:outline-none' type='text' placeholder='Search for courses...' />
            <Search className="absolute right-4 top-0 translate-y-[45%] cursor-pointer transition-all duration-300 hover:translate-y-[40%] hover:scale-105'" />
        </div>
    )
}

// User Access Hub (for authenticated users)
export const AuthUserAccessHub = () => {
    const user = JSON.parse(localStorage.getItem('userData')); // Assuming user data is stored in local storage
    return (
        <div className='flex items-center gap-8'>
            <Link to="/favorites"><Heart className='text-[#64748B] w-6 h-6 hover:scale-105 hover:translate-y-[-2px]' /></Link>
            <Link to="/shopping-cart"><ShoppingCart className='text-[#64748B] w-6 h-6 hover:scale-105 hover:translate-y-[-2px]' /></Link>
            <Link to="/notifications"><BellDot className='text-[#64748B] w-6 h-6 hover:scale-105 hover:translate-y-[-2px]' /></Link>
            <Link to="/user-profile">
                {user && (
                    user.profilePicture ? (
                        <img
                            src={user.profilePicture}
                            alt={`${user.firstname}'s profile`}
                            className="w-10 h-10 rounded-full"
                        />
                    ) : (
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#6f5400] font-bold text-white">
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
        <div className='flex items-center gap-8'>
            <Link to="/shopping-cart"><ShoppingCart className='text-[#64748B] w-8 h-8 hover:scale-105 hover:translate-y-[-2px]' /></Link>
            <Link to="/login" className="p-[10px] border border-[#64748B] w-full bg-white hover:bg-[#64748B] hover:text-white lg:w-fit">Login</Link>
            <Link to="/signup" className="p-[10px] border border-[#64748B] bg-[#64748B] text-white hover:bg-white hover:text-[#64748B] w-full lg:w-fit">Sign Up</Link>
        </div>
    )
}

