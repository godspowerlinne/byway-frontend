import React, { useState, useEffect } from 'react'
import { useAuth } from '../base/Auth'
import { useNavigate } from 'react-router-dom';
import { useModal } from '../base/Modal';
import { ArrowRight, Loader2 } from 'lucide-react';
import loginImg from '../assets/loginimg.png' 

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
              
                // Redirect after a short delay
                setTimeout(() => {
                  modal.closeModal();
                    navigate('/dashboard');
                }, 2000);
            }
        } catch (err) {
            // Handle login errors
            const errorMessage = err?.message || err?.toString() || "Login failed. Please try again.";
            modal.openModal(errorMessage, "error");
            
            // Clear any persistent errors
            setTimeout(() => {
                clearError();
            }, 500);
        }
        
        setIsLoading(false);
    }

    // Handle auth errors
    useEffect(() => {
        if (error) {
            // Make sure error is a string before passing to modal
            const errorMessage = typeof error === 'object' ? 
                (error.message || JSON.stringify(error)) : 
                error.toString();
            
            modal.openModal(errorMessage, "error");
            setTimeout(() => {
                clearError()
            }, 300);
        }
    }, [error, modal, clearError]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-[45%,55%] pt-10 sm:pt-16 max-w-screen-2xl mx-auto items-center lg:pr-16 bg-gradient-to-br from-white to-gray-100 dark:from-[#0f172a] dark:to-[#020617] transition-colors duration-300'>
            <div className='h-screen lg:h-auto min-h-[700px] shadow-lg dark:shadow-purple-900/20'>
                <img src={loginImg} alt="Login illustration" className="w-full h-full object-cover" />
            </div>
            <div className='px-4 md:px-8 py-3 w-full max-w-[692px] h-full md:h-auto absolute md:static bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-sm md:backdrop-blur-none rounded-xl shadow-xl dark:shadow-purple-900/30 transition-all duration-300'>
                <h1 className="text-2xl md:text-3xl font-bold text-[#334155] dark:text-white text-center mb-2">Sign in to your account</h1>
                <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
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
                            className="w-full dark:bg-black/50 bg-white/50 focus:outline-none px-6 py-[16px] border border-[#797b7e] dark:border-[#522798] rounded-md text-sm dark:text-white text-black transition-all duration-300"
                            required
                        />
                    </div>
                    
                    {/* Password */}
                    <div>
                        <label className='text-black dark:text-white' htmlFor="password">Password</label>
                        <input
                            onChange={handleInputChange}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            className="w-full focus:outline-none px-6 py-[16px] border border-[#797b7e] dark:border-[#522798] rounded-md text-sm dark:bg-black/50 bg-white/50 dark:text-white text-black transition-all duration-300"
                            required
                        />
                    </div>
                    
                    {/* Forgot Password */}
                    <div className="flex justify-end">
                        <a href="/forgot-password" className="text-sm text-[#522798] hover:text-[#6a32c5] transition-all duration-300">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full lg:w-fit rounded px-8 p-[10px] border border-[#522798] bg-[#000000] font-bold text-white dark:bg-[#522798] justify-center transition-all flex gap-2 duration-300 disabled:opacity-50 disabled:cursor-wait mt-6"
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
                    
                    {/* Sign up link */}
                    <div className="text-center mt-4">
                        <span className="text-black dark:text-white">Don't have an account? </span>
                        <a href="/signup" className="text-[#522798] hover:text-[#6a32c5] transition-all duration-300">
                            Sign Up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;