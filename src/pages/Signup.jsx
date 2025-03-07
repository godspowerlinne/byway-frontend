import React, { useState, useEffect } from 'react'
import { useAuth } from '../base/Auth'
import { Link, useNavigate } from 'react-router-dom';
import { useModal } from '../base/Modal';
// Import Input component
import { ArrowRight, Loader2 } from 'lucide-react';
import signupImg from '../assets/signupimg.png'
import { Social } from '../utilities/Elements';
import { FaFacebook, FaGoogle, FaMicrosoft } from 'react-icons/fa';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { signup, error, clearError } = useAuth();
    const modal = useModal();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        clearError();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const validateForm = (formData) => {
        const errors = [];

        // First Name validation
        if (!formData.firstname) {
            errors.push('First name is required');
        } else if (formData.firstname.length < 2 || formData.firstname.length > 30) {
            errors.push('First name must be between 2 and 30 characters');
        }

        // Last Name validation
        if (!formData.lastname) {
            errors.push('Last name is required');
        } else if (formData.lastname.length < 2 || formData.lastname.length > 30) {
            errors.push('Last name must be between 2 and 30 characters');
        }

        // Username validation
        if (!formData.username) {
            errors.push('Username is required');
        } else if (formData.username.length < 3 || formData.username.length > 30) {
            errors.push('Username must be between 3 and 30 characters');
        } else if (!/^[a-zA-Z0-9]+$/.test(formData.username)) {
            errors.push('Username must be alphanumeric');
        }

        // Email validation
        if (!formData.email) {
            errors.push('Email is required');
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.push('Invalid email address');
        }

        // Password validation
        if (!formData.password) {
            errors.push('Password is required');
        } else if (formData.password.length < 8) {
            errors.push('Password must be at least 8 characters');
        }

        // Confirm Password validation
        if (!formData.confirmPassword) {
            errors.push('Please confirm your password');
        } else if (formData.password !== formData.confirmPassword) {
            errors.push('Passwords do not match');
        }

        return errors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Validate inputs
        const validationErrors = validateForm(formData);

        if (validationErrors.length > 0) {
            modal.openModal(validationErrors.join('\n'), 'error'); // Show all errors
            setIsLoading(false); // Stop loading
            return;
        }
        // try catch
        try {
            // remove confirmPassword before sending the formdata payload to the api
            const { confirmPassword, ...signupData } = formData;
            const response = await signup(signupData);

            // catch response
            if (response.success) {
                modal.openModal("Signup successful! Redirecting to login...", "success");
                setIsLoading(false);
                setTimeout(() => {
                    modal.closeModal();
                    navigate('/login');
                }, 2000);
            }
        } catch (error) {
            console.log("Signup Error", error.message);
            modal.openModal(error.message, "error")
            setIsLoading(false);
        }
    };


    return (
        <div className='grid grid-cols-1 md:grid-cols-[45%,55%] pt-16 sm:pt-16  max-w-screen-2xl md:mx-auto items-center lg:pr-16 bg-white dark:bg-[#020617]/90'>
            <div className='h-[100%] min-h-[700px]  absolute md:static'>
                <img src={signupImg} alt="Signup illustration" className="w-full h-full object-cover" />
            </div>
            <div className='px-4 md:px-8 py-3 w-full md:max-w-[692px] h-full min-h-[750px] md:h-auto bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-sm md:backdrop-blur-none shadow-xl dark:shadow-purple-900/30 transition-all duration-300'>
                <h1 className="text-2xl md:text-3xl  font-bold text-[#334155]  dark:text-white text-center my-6">Create Your Account</h1>
                <form className="flex flex-col gap-4 w-[90%] md:w-full m-auto" onSubmit={handleSubmit}>
                    {/* Full name  */}
                    <div>
                        <label className='text-black dark:text-white' htmlFor="firstname">Full Name</label>
                        <div className="flex w-full flex-col lg:flex-row gap-8 mt-4">
                            <input
                                onChange={handleInputChange}
                                type="text"
                                id="firstname"
                                name="firstname"
                                placeholder="First Name"
                                value={formData.firstname}
                                className={`w-full focus:outline-none px-3 py-[8px] sm:px-6 sm:py-[16px] border ${error ? 'border-red-500' : 'border-[#797b7e]'} ${error ? 'dark:border-red-500' : 'dark:border-[#522798]'} dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300`}
                                required
                            />
                            <input
                                onChange={handleInputChange}
                                type="text"
                                id="lastname"
                                name="lastname"
                                placeholder="Last Name"
                                value={formData.lastname}
                                className={`w-full focus:outline-none px-3 py-[8px] sm:px-6 sm:py-[16px] border ${error ? 'border-red-500' : 'border-[#797b7e]'} ${error ? 'dark:border-red-500' : 'dark:border-[#522798]'} dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300`}
                                required
                            />
                        </div>
                    </div>
                    {/* Username  */}
                    <div>
                        <label className='text-black dark:text-white' htmlFor="username">Username</label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            className={`w-full focus:outline-none px-3 py-[8px] sm:px-6 sm:py-[16px] border ${error ? 'border-red-500' : 'border-[#797b7e]'} ${error ? 'dark:border-red-500' : 'dark:border-[#522798]'} dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300`}
                            required
                        />
                    </div>
                    {/* Email  */}
                    <div>
                        <label className='text-black dark:text-white' htmlFor="email">Email</label>
                        <input
                            onChange={handleInputChange}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email ID"
                            value={formData.email}
                            className={`w-full focus:outline-none px-3 py-[8px] sm:px-6 sm:py-[16px] border ${error ? 'border-red-500' : 'border-[#797b7e]'} ${error ? 'dark:border-red-500' : 'dark:border-[#522798]'} dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300`}
                            required
                        />
                    </div>
                    {/* Password  */}
                    <div className='flex w-full flex-col lg:flex-row gap-4 mb-2'>
                        <div>
                            <label className='text-black dark:text-white' htmlFor="password">Enter Password</label>
                            <input
                                onChange={handleInputChange}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                className={`w-full focus:outline-none px-3 py-[8px] sm:px-6 sm:py-[16px] border ${error ? 'border-red-500' : 'border-[#797b7e]'} ${error ? 'dark:border-red-500' : 'dark:border-[#522798]'} dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300`}
                                required
                            />
                        </div>
                        {/* Confirm  */}
                        <div>
                            <label className='text-black dark:text-white' htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                onChange={handleInputChange}
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                className={`w-full focus:outline-none px-3 py-[8px] sm:px-6 sm:py-[16px] border ${error ? 'border-red-500' : 'border-[#797b7e]'} ${error ? 'dark:border-red-500' : 'dark:border-[#522798]'} dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300`}
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full lg:w-fit rounded p-2 sm:p-[14px] border border-[#522798] bg-[#000000] font-bold text-white dark:bg-[#522798] justify-center transition-all flex gap-2 duration-300 disabled:opacity-50 disabled:cursor-wait"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Creating Account...
                            </>
                        ) : (
                            <>Create Account <ArrowRight /></>
                        )}
                    </button>
                </form>
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-[#797b7e] dark:border-[#522798]"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-sm md:backdrop-blur-none text-[#000] dark:text-[#fff] transition-all duration-300">
                            Sign up with
                        </span>
                    </div>
                </div>
                {/* Socials  */}
                <div className='flex flex-wrap mt-7 gap-4 m-auto w-[90%] sm:w-full'>
                    <Social name='Facebook' icon={<Link to='#'><FaFacebook className='p-1 bg-white text-[#3B82F6] rounded-full w-8 h-8 hover:animate-pulse' /></Link>} textStyle='text-[#0866FF] dark:text-white' />
                    <Social name='Google' icon={<Link to='#'><FaGoogle className='p-1 bg-white text-[#f0432c]  rounded-full w-8 h-8 hover:animate-pulse' /></Link>} textStyle='text-[#EA4335] dark:text-white' />
                    <Social name='Microsoft' icon={<Link to='#'><FaMicrosoft className='p-1 bg-white text-[#bc34ee]  rounded-full w-8 h-8 hover:animate-pulse' /></Link>} textStyle='text-[#000000] dark:text-white' />
                </div>
            </div>
        </div>
    );
}

export default Signup;