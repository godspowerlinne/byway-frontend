import React, { useState, useEffect } from 'react'
import { useAuth } from '../base/Auth'
import { useNavigate } from 'react-router-dom';
import { useModal } from '../base/Modal';
// Import Input component
import { ArrowRight, Loader2 } from 'lucide-react';
import signupImg from '../assets/signupimg.png'

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

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Validate inputs
        if (!formData.firstname || !formData.lastname || !formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
            modal.openModal('Please fill in all fields', 'error');
            setIsLoading(false);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            modal.openModal('Passwords do not match', 'error');
            setIsLoading(false);
            return;
        }

        try {
            // CORS workaround - if using your own backend, you should fix CORS on the server side instead
            // For development purposes, you can use this workaround
            const { confirmPassword, ...signupData } = formData;
            
            // First attempt - direct call to the API
            try {
                const response = await signup(signupData);
                if (response) {
                    // Successful signup
                    modal.openModal("Signup successful! Redirecting to login...", "success");
                    
                    // Redirect after a short delay
                    setTimeout(() => {
                         modal.closeModal();
                        navigate('/login');
                    }, 2000);
                }
            } catch (fetchError) {
                // If the first attempt fails with a CORS error, try an alternative approach
            }
        } catch (err) {
            // Handle signup errors
            const errorMessage = err?.message || err?.toString() || "Signup failed. Please try again.";
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
    }, [error, modal]);


    return (
        <div className='grid grid-cols-1 md:grid-cols-[45%,55%] pt-10 sm:pt-16  max-w-screen-2xl md:mx-auto items-center lg:pr-16 bg-white dark:bg-[#020617]/90'>
            <div className='h-screen lg:h-auto min-h-[700px]'>
                <img src={signupImg} alt="Signup illustration" className="w-full h-full object-cover" />
            </div>
            <div className='px-4 md:px-8 py-3 w-full md:max-w-[692px] h-full min-h-[700px] md:h-auto absolute md:static bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-sm md:backdrop-blur-none rounded-xl shadow-xl dark:shadow-purple-900/30 transition-all duration-300'>
                <h1 className="text-2xl md:text-3xl  font-bold text-[#334155]  dark:text-white text-center">Create Your Account</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                                className="w-full focus:outline-none px-6 py-[16px] border border-[#797b7e] dark:border-[#522798] dark:bg-black/50 bg-white/50 dark:text-white text-black rounded-md text-sm transition-all duration-300"
                                required
                            />
                            <input
                                onChange={handleInputChange}
                                type="text"
                                id="lastname"
                                name="lastname"
                                placeholder="Last Name"
                                value={formData.lastname}
                                className="w-full focus:outline-none px-6 py-[16px] border border-[#797b7e] dark:border-[#522798] rounded-md text-sm dark:bg-black/50 bg-white/50 text-black dark:text-white transition-all duration-300"
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
                            className="w-full dark:bg-black/50 bg-white/50 focus:outline-none px-6 py-[16px] border border-[#797b7e] dark:border-[#522798] rounded-md text-sm  dark:text-white text-black  transition-all duration-300"
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
                            className="w-full focus:outline-none px-6 py-[16px] border border-[#797b7e] dark:border-[#522798] rounded-md text-sm dark:bg-black/50 bg-white/50 dark:text-white text-black  transition-all duration-300"
                            required
                        />
                    </div>
                    {/* Password  */}
                    <div className='flex w-full flex-col lg:flex-row gap-4 mb-8'>
                        <div>
                            <label className='text-black dark:text-white' htmlFor="password">Enter Password</label>
                            <input
                                onChange={handleInputChange}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                className="w-full focus:outline-none px-6 py-[16px] border border-[#797b7e] dark:border-[#522798] rounded-md text-sm dark:bg-black/50 bg-white/50 dark:text-white text-black  transition-all duration-300"
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
                                className="w-full focus:outline-none px-6 py-[16px] border border-[#797b7e] dark:border-[#522798] rounded-md text-sm dark:bg-black/50 bg-white/50 dark:text-white text-black  transition-all duration-300"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full lg:w-fit rounded px-8 p-[10px] border border-[#522798] bg-[#000000] font-bold text-white dark:bg-[#522798] justify-center transition-all flex gap-2 duration-300 disabled:opacity-50 disabled:cursor-wait"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Creating Account...
                            </>
                        ) : (
                            <>Sign Up <ArrowRight /></>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;