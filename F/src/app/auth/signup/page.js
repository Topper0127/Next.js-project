"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { IoEyeOutline } from "react-icons/io5";
import userservice from '../../../services/UserService';
import { validEmail } from '../../../utils/valid-email';

const SignUp = () => {
	const router = useRouter();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	
	const onSubmit = () => {
		console.log("email",email);
		if (!validEmail(email) || password.length < 8) return ;
		userservice.signup({
		  email: email,
		  password: password
		}).then(res => {
		  router.push('/auth/login');
		  console.log(res);
		})
	
	  }

	return (
		<div className='bg-white p-6 rounded-lg flex flex-col md:flex-row gap-6 w-5/6 md:w-[721px] m-auto'>
			<div className='md:w-[246px] w-1/3'>
				<img className='rounded-lg h-full object-cover' src='/signup.png' alt='Login Image' />
			</div>
			<div className='md:w-[403px] w-2/3'>
				<img className='mt-6 w-[258px] m-auto' src='/logo.png' alt='Logo image' />
				<div className='mt-6 text-center font-semibold text-base text-[#0A50A4]'>Create an account</div>
				<div className='mt-1 text-center font-normal text-xs text-[#B3B3B3]'>Create a new account</div>
				<div className='mt-6'>
					<div>
						<div className='text-[14px]'>Email Address</div>
						<label className="relative block">
							<span className="absolute inset-y-0 top-2 left-0 flex pointer-events-auto items-center pl-2">
								<svg className='absolute text-slate-300 h-5 w-5 relative' viewBox='0 0 20 20' fill='currentColor'>
									<path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
								</svg>
							</span>
							<input type='text' className='w-full mt-[10px] outline-none rounded-md border-2  pl-9 pr-3 ' placeholder='Please Input here.' onChange={text => setEmail(text.target.value)} />
						</label>
					</div>
					<div className='mt-[18px]'>
						<div className='text-[14px]'>User Password</div>
						<div className="relative  rounded-md shadow-sm">
							<input type='password' id="password" className='w-full mt-[10px] outline-none rounded-md border-2 pl-4 ' placeholder='Please Input here.'  onChange={text =>{ setPassword(text.target.value); console.log(text.target.value)}} />
								<div className="absolute inset-y-0 right-0 flex pt-3 pr-5 items-center ">
									<button onClick={()=>{
											var x = document.getElementById("password");
											if (x.type === "password") {
												x.type = "text";
											} else {
												x.type = "password";
											}}}><IoEyeOutline className='w-5 h-5 justify-center items-center flex'/></button>
								</div>
						</div>
					</div>
				</div>
				<div className='my-6'>
					<button type='submit' className='w-full py-2 px-6 rounded-lg text-[14px] text-center text-white bg-[#3B368D]'  onClick={() => onSubmit()}>
						Sign Up
					</button>
				</div>
				<div className='flex'>
					<hr className='flex-1 m-auto' />
					<div className='flex-none mx-3'>or</div>
					<hr className='flex-1 m-auto' />
				</div>
				<div className='my-6'>
					<button className='w-full py-2 rounded-lg border-2 flex justify-center text-[14px]'>
						<FcGoogle size={20} className='my-auto mr-[10px]' />
						<span className='my-auto'>Google</span>
					</button>
					<button className='mt-3 w-full py-2 rounded-lg border-2 flex justify-center text-[14px]'>
						<FaFacebook size={20} className='my-auto mr-[10px] text-[#1877F2]' />
						<span className='my-auto'>Facebook</span>
					</button>
				</div>
				<div className='text-center text-[14px]'>
					Already haev an account?{' '}
					<Link className='text-[#4193F6] underline' href={'/auth/login'}>
						Log in
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
