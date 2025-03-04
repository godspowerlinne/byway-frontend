import React from 'react'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaGoogle, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className=' bg-[#1E293B] dark:bg-[#410B65] text-[#CBD5E1]'>
			<div className='max-w-screen-2xl w-full mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 px-4 md:px-8 xl:px-14 py-3 font-[500]'>
				<div className='flex flex-col gap-4 max-w-[400px]'>
					{/* Logo */}
					<Link to="/" className='flex items-center gap-2'>
						<img className='h-10 w-auto object-cover' src='/public/byway.svg' alt='Logo' />
						<span className='text-[16px] dark:text-white'>Byway</span>
					</Link>
					<p>Empowering learners through accessible and engaging online education. <br />Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences. </p>
				</div>
				<div>
					<h3 className='font-[800] mb-4'>Get Help</h3>
					<ul>
						<li className='cursor-pointer hover:translate-x-3 hover:text-[#0ffff0] w-fit'>Contact Us</li>
						<li className='cursor-pointer hover:translate-x-3 hover:text-[#0ffff0] w-fit'>Latest Articles</li>
						<li className='cursor-pointer hover:translate-x-3 hover:text-[#0ffff0] w-fit'>FAQ</li>
					</ul>
				</div>
				<div>
					<h3 className='font-[800] mb-4'>Programs</h3>
					<ul>
						<li className='cursor-pointer hover:translate-x-3 hover:text-[#0ffff0] w-fit'>Art & Design</li>
						<li className='cursor-pointer hover:translate-x-3 hover:text-[#0ffff0] w-fit'>Business</li>
						<li className='cursor-pointer hover:translate-x-3 hover:text-[#0ffff0] w-fit'>IT & Software</li>
						<li className='cursor-pointer hover:translate-x-3 hover:text-[#0ffff0] w-fit'>Languages</li>
						<li className='cursor-pointer hover:translate-x-3 hover:text-[#0ffff0] w-fit'>Programming</li>
					</ul>
				</div>
				<div>
					<h3 className='font-[800] mb-4'>Contact Us</h3>
					<p className='hover:underline underline-offset-2'><strong>Tel: </strong> +(123) 456-7890</p>
					<p className='hover:underline underline-offset-2'><strong>Mail: </strong> bywayedu@webkul.in</p>
					<p className='hover:underline underline-offset-2'><strong>Address: </strong> 123 Main Street, Anytown, CA 12345</p>
					{/* socials here */}
					<div className='flex gap-4 py-6 flex-wrap'>
						<Link to='#'><FaFacebook className='p-1 bg-white text-[#3B82F6] rounded-full w-8 h-8 hover:animate-pulse'/></Link>
						<Link to='#'><FaGithub className='p-1 bg-white text-black rounded-full w-8 h-8 hover:animate-pulse'/></Link>
						<Link to='#'><FaXTwitter className='p-1 bg-white text-[#000]  rounded-full w-8 h-8 hover:animate-pulse'/></Link>
						<Link to='#'><FaInstagram className='p-1 bg-white text-[#b82cf0]  rounded-full w-8 h-8 hover:animate-pulse'/></Link>
						<Link to='#'><FaGoogle className='p-1 bg-white text-[#f0432c]  rounded-full w-8 h-8 hover:animate-pulse'/></Link>
					</div>
				</div>
			</div>


		</footer>
	)
}

export default Footer