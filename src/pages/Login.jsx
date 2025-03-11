import React, { useState, useEffect } from 'react'
import { useAuth } from '../base/Auth'
import { Link, useNavigate } from 'react-router-dom';
import { useModal } from '../base/Modal';
import { ArrowRight, Loader2 } from 'lucide-react';
import loginImg from '../assets/loginimg.png'
import { Social } from '../utilities/Elements';
import FacebookIcon from '../assets/Facebook_Logo.svg'
import GoogleIcon from '../assets/google_logo.svg'
import MicrosoftIcon from '../assets/microsoft_logo.svg'

const Login = () => {
    const [formData, setFormData] = useState({
        credentials: '', // This will be either email or username
        password: ''
    });

    const { login, error, clearError } = useAuth();
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

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Validate inputs
        if (!formData.credentials || !formData.password) {
            modal.openModal('Please fill in all fields', 'error');
            setIsLoading(false);
            return;
        }

        try {
            // Determine if the user input is an email or username
            const isEmail = formData.credentials.includes('@');
            const credentials = {
                [isEmail ? 'email' : 'username']: formData.credentials,
                password: formData.password
            };

            // Attempt login
            const response = await login(credentials);

            if (response) {
                // Successful login
                modal.openModal("Login successful! Redirecting...", "success");
                setIsLoading(false)

                // Redirect after a short delay
                setTimeout(() => {
                    modal.closeModal();
                    navigate('/dashboard');
                }, 2000);
            }
        } catch (err) {
            // Handle login errors
            console.log("Login Error: ", err);
            modal.openModal(err.message, 'error');
            // Clear any persistent errors
            setTimeout(() => {
                clearError();
            }, 500);
        }

        setIsLoading(false);
    }
    const [showPassword, setShowPassword] = useState(false); // State for password visibility

    return (
        <section className='bg-white dark:bg-[#020617] min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-[55%,45%] pt-16 sm:pt-16 max-w-screen-2xl mx-auto items-center lg:pl-16 bg-gradient-to-br from-white to-gray-100 dark:from-[#0f172a] dark:to-[#020617] transition-colors duration-300'>
                <div className='px-4 md:px-8 py-3 w-full md:max-w-[692px] h-full min-h-[750px] md:h-auto bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-sm md:backdrop-blur-none shadow-xl dark:shadow-purple-900/30 transition-all duration-300'>
                    <h1 className="text-2xl md:text-3xl my-10 font-bold text-[#334155] dark:text-white text-center mb-2">Sign in to your account</h1>
                    <form className="flex flex-col gap-4 w-[90%] sm:w-full m-auto mt-6" onSubmit={handleSubmit}>
                        {/* Username or Email */}
                        <div>
                            <label className='text-black dark:text-white' htmlFor="credentials">Username or Email</label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                id="credentials"
                                name="credentials"
                                placeholder="Username or Email ID"
                                value={formData.credentials}
                                className={`w-full focus:outline-none px-3 py-[8px] sm:px-6 sm:py-[16px] border ${error ? 'border-red-500' : 'border-[#797b7e]'} ${error ? 'dark:border-red-500' : 'dark:border-[#522798]'} dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300`}
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className='text-black dark:text-white' htmlFor="password">Password</label>
                            <input
                                onChange={handleInputChange}
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                className={`w-full focus:outline-none px-3 py-[8px] sm:px-6 sm:py-[16px] border ${error ? 'border-red-500' : 'border-[#797b7e]'} ${error ? 'dark:border-red-500' : 'dark:border-[#522798]'} dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300`}
                                required
                            />
                            {/* Show Password  */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="showPassword"
                                    checked={showPassword}
                                    onChange={() => setShowPassword(!showPassword)}
                                    className='cursor-pointer rounded border border-gray-300 focus:ring focus:ring-blue-200'
                                />
                                <label htmlFor="showPassword" className="text-sm text-gray-500 dark:text-gray-400">
                                    Show Password
                                </label>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end">
                            <a href="/forgot-password" className="text-sm font-black text-[#522798] dark:text-[#f655ff] hover:scale-x-105 transition-all duration-300">
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full lg:w-fit rounded p-2 sm:p-[14px] border border-[#522798] bg-[#000000] font-bold text-white dark:bg-[#522798] justify-center transition-all flex gap-2 duration-300 disabled:opacity-50 disabled:cursor-wait"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Logging in...
                                </>
                            ) : (
                                <>Login <ArrowRight /></>
                            )}
                        </button>
                    </form>
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#797b7e] dark:border-[#522798]"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-sm md:backdrop-blur-none text-[#000] dark:text-[#fff] transition-all duration-300">
                                Login with
                            </span>
                        </div>
                    </div>
                    {/* Socials  */}
                    <div className='flex flex-col sm:flex-row  mt-7 gap-4 m-auto w-[90%] sm:w-full'>
                        <Social name='Facebook' icon={<Link to='#'><img src={FacebookIcon} /></Link>} textStyle='text-[#0866FF] dark:text-white ' />
                        <Social name='Google' icon={<Link to='#'><img src={GoogleIcon} /></Link>} textStyle='text-[#EA4335] dark:text-white ' />
                        <Social name='Microsoft' icon={<Link to='#'><img src={MicrosoftIcon} /></Link>} textStyle='text-[#000000] dark:text-white ' />
                    </div>
                </div>
                <div className='h-[100%] min-h-[700px] -z-10 md:z-auto  absolute md:static'>
                    <img src={loginImg} alt="Login illustration" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
}

export default Login;