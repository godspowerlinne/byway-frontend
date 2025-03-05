import { AlignJustify, Moon, SunDim, X } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthUserAccessHub, GuestUserAccessHub, SearchBar, SearchBar2 } from '../utilities/Elements';
import { useTheme } from '../base/Theme'
import { useAuth } from '../base/Auth';
import Byway from '/byway.svg'

const Navbar = () => {
    // Use Theme Context 
    const { isDarkMode, toggleTheme } = useTheme();

    // Use Auth Context 
    const { isAuthenticated } = useAuth();

    // State for Menu open and close
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu open and close
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    return (
        <header className='min-h-16 bg-white dark:bg-[#020617] text-[#334155] fixed  dark:text-white w-full z-[1000] border-b border-b-blue-600/30'>
            <nav className='max-w-screen-2xl w-full mx-auto flex items-center justify-between px-4 md:px-8 xl:px-14 py-3 font-[500]'>
                {/* Logo */}
                <Link to="/" className='flex items-center gap-2 z-[100]'>
                    <img className='h-10 w-auto object-cover' src={Byway} alt='Logo' />
                    <span className='text-[16px] dark:text-white'>Byway</span>
                </Link>
                <Link to="/category" className='hidden lg:flex dark:text-[#c19bff] hover:text-[#64748B] dark:hover:text-white transition-all md:text-[14px] lg:text-[16px]'>Categories</Link>
                {/* Search bar  */}
                <SearchBar />
                <Link to="/mentor" className='hidden lg:flex dark:text-[#c19bff] hover:text-[#64748B] dark:hover:text-white transition-all text-[14px] xl:text-[16px]'>Teach on Byway</Link>
                {/* Toggle Theme  */}
                <button onClick={toggleTheme} className="hidden lg:flex p-1 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all" >
                    {isDarkMode ? (<SunDim className="text-yellow-400 scale-90 xl:scale-100" />) : (<Moon className="text-gray-400 scale-90 xl:scale-100" />)}
                </button>
                {/* User Access Hub  */}
                <div className='hidden lg:flex scale-90 xl:scale-100'>
                    {isAuthenticated ? (<AuthUserAccessHub />) : (<GuestUserAccessHub />)}
                </div>
                {/* Menu Icon */}
                <button onClick={handleMenuToggle} className="lg:hidden p-2 z-[100]  dark:text-white" >
                    {isMenuOpen ? (<X className="h-8 w-8" />) : (<AlignJustify className="h-8 w-8" />)}
                </button>
            </nav>
            {/* Mobile nav */}
            {isMenuOpen && (
                <div className='fixed inset-0 z-50 lg:hidden'>
                    <div className='absolute inset-0 bg-black/30 dark:bg-[#c19bff]/30 backdrop-blur-[2px] transition-opacity duration-300' onClick={handleMenuToggle} ></div>
                    <div className='relative flex flex-col gap-4 items-center pt-20 p-8 max-w-[400px] w-full bg-white dark:bg-[#020617] h-[100%] min-h-[600px] shadow-xl'>
                        <Link to="/category" className='rounded p-3 w-full font-bold dark:text-[#c19bff] text-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow-md transition-all' onClick={handleMenuToggle} >Categories </Link>
                        <Link to="/mentor" className='rounded p-3 w-full font-bold dark:text-[#c19bff] text-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow-md transition-all' onClick={handleMenuToggle} >Teach on Byway </Link>
                        <div onClick={handleMenuToggle} className='w-full'>
                            {isAuthenticated ? (<AuthUserAccessHub />) : (<GuestUserAccessHub />)}
                        </div>
                        <button onClick={toggleTheme} className="p-2 w-20 h-10 rounded-full relative flex items-center transition-all duration-300 ease-in-out border border-gray-200 dark:border-gray-700" >
                            <div className="absolute w-8 h-8 rounded-full flex items-center justify-center transform transition-transform duration-300 ease-in-out shadow-md" style={{ backgroundColor: isDarkMode ? '#334155' : 'white', transform: isDarkMode ? 'translateX(32px)' : 'translateX(-5px)' }} >
                                {isDarkMode ? (
                                    <Moon className="w-5 h-5 text-yellow-400" />
                                ) : (
                                    <SunDim className="w-5 h-5 text-gray-400" />
                                )}
                            </div>
                        </button>
                        <SearchBar2 />
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar