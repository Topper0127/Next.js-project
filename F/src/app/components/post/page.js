'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { GoPersonAdd } from "react-icons/go";
import Link from 'next/link';
import { FaCheck } from "react-icons/fa6";
import userservice from '../../../services/UserService';
const JobList = () => {
	
	const router = useRouter();
	const initData = {
		companyName: "",
		hiringManagerName: "",
		email: "",
		address: "",
		city: "",
		state: "",
		zip: 0,
		salaryAmount: 0,
		type: 0,
		createdDate: "",
		expirationDate: ""
	  }

	  const [formData, setFormData] = useState(initData);

	  const onSubmit = () => {
		console.log(formData);
		userservice.create({
		  ...formData,
		  createdDate: new Date(),
		  expirationDate: new Date()
		}).then(res => {
		  // setFormData(initData);
		  router.push('/components/list')
		});
	  }

	return (
		<>
		<div className="Header">
			<div className="w-full h-[184px] flex-col justify-start items-center gap-2.5 inline-flex relative">
			<img className='w-full h-[184px] bg-white bg-opacity-50' src='/jobpost.png' alt='JOB image' />
			<div className="w-full h-full p-8 flex-col justify-start items-center gap-2.5 inline-flex absolute">
			<div className="w-[1400px] h-[120px]  flex-col justify-center items-start gap-6 inline-flex absolute">
				<div className="w-[738px] h-16 py-6 justify-start items-center gap-6 inline-flex">
					<div className="p-2 bg-slate-200 rounded-2xl justify-start items-center gap-2.5 flex">
						<GoPersonAdd className="w-12 h-12 relative"/>
					</div>
					<div className="flex-col justify-center items-start gap-2 inline-flex">
						<div className="text-neutral-600 text-[32px] font-normal font-['Rubik'] capitalize">Post New Job</div>
						<div className="text-black text-opacity-50 text-xs font-normal font-['Rubik']">Lorem ipsum dolor sit amet consectetur. Tellus nulla ipsum faucibus consectetur. Felis nunc in tempor aenean purus.</div>
					</div>
				</div>
				<div className="w-[486px] h-8 justify-start items-center gap-2.5 inline-flex ">
					<button>
						<div className="w-[119px] px-6 py-2 bg-sky-700 rounded-lg justify-center items-center gap-2.5 flex">
							<div className="text-slate-200 text-sm font-normal font-['Rubik'] capitalize">Dashboard</div>
						</div>
					</button>
					<Link href={'list'}>
						<div className="w-[103px] px-6 py-2 bg-slate-300 rounded-lg justify-center items-center gap-2.5 flex">
							<div className="text-sky-700 text-sm font-normal font-['Rubik'] capitalize">My Jobs</div>
						</div>
					</Link>
					<button>
						<div className="w-[118px] px-6 py-2 bg-slate-300 rounded-lg justify-center items-center gap-2.5 flex">
							<div className="text-sky-700 text-sm font-normal font-['Rubik'] capitalize">Applicants</div>
						</div>
					</button>
					<button>
						<div className="w-[116px] px-6 py-2 bg-slate-300 rounded-lg justify-center items-center gap-2.5 flex">
							<div className="text-sky-700 text-sm font-normal font-['Rubik'] capitalize">Interviews</div>
						</div>
					</button>
				</div>
			</div></div>
			</div>
		</div>
		<div className="MainBoard">
			<div className="w-full p-5 flex-col justify-start items-center  inline-flex">
				<div className="w-[1400px]  rounded-2xl flex-col justify-start items-start gap-8 inline-flex"></div>
					<div className="w-[1400px] p-6 bg-white rounded-2xl flex-col justify-start items-center gap-3 inline-flex">
						<div className="w-4/5 p-6 rounded-lg border border-black border-opacity-10 flex-col justify-start items-center gap-3 inline-flex">
							<div className="w-[944px] h-[57px] flex-col justify-start items-start gap-2 inline-flex">
								<div className="self-stretch justify-between items-center inline-flex">
									<div className="text-neutral-600 text-sm font-medium font-['Rubik']">Company Name</div>
									<div className="h-3 justify-between items-center flex">
										<div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
									</div>
								</div>
								<input type='text' className="w-full self-stretch outline-none h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex text-zinc-400 text-sm font-normal font-['Rubik']" onChange={text => setFormData({ ...formData, companyName: text.target.value })} placeholder='Please Input here.' />
							</div>
							<div className="w-[944px] h-[57px] flex-col justify-start items-start gap-2 inline-flex">
								<div className="self-stretch justify-between items-center inline-flex">
									<div className="text-neutral-600 text-sm font-medium font-['Rubik']">Hiring Manager Name</div>
									<div className="h-3 justify-between items-center flex">
										<div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
									</div>
								</div>
								<input type='text' className="self-stretch outline-none h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex text-zinc-400 text-sm font-normal font-['Rubik']" placeholder='Please Input here.' onChange={text => setFormData({ ...formData, hiringManagerName: text.target.value })}/>
							</div>
							<div className="w-[944px] h-[57px] flex-col justify-start items-start gap-2 inline-flex">
								<div className="self-stretch justify-between items-center inline-flex">
									<div className="text-neutral-600 text-sm font-medium font-['Rubik']">E mail</div>
									<div className="h-3 justify-between items-center flex">
										<div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
									</div>
								</div>
								<input type='text' className="self-stretch outline-none h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex text-zinc-400 text-sm font-normal font-['Rubik']" placeholder='Please Input here.' onChange={text => setFormData({ ...formData, email: text.target.value })}/>
							</div>
							<div className="w-[944px] h-[57px] flex-col justify-start items-start gap-2 inline-flex">
								<div className="self-stretch justify-between items-center inline-flex">
									<div className="text-neutral-600 text-sm font-medium font-['Rubik']">Address</div>
									<div className="h-3 justify-between items-center flex">
										<div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
									</div>
								</div>
								<input type='text' className="self-stretch outline-none h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex text-zinc-400 text-sm font-normal font-['Rubik']" placeholder='Please Input here.' onChange={text => setFormData({ ...formData, address: text.target.value })}  />
							</div>
							<div className="w-[944px] h-[57px] flex-col justify-start items-start gap-2 inline-flex">
								<div className="self-stretch justify-between items-center inline-flex">
									<div className="text-neutral-600 text-sm font-medium font-['Rubik']">City</div>
									<div className="h-3 justify-between items-center flex">
										<div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
									</div>
								</div>
								<input type='text' className="self-stretch outline-none h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex text-zinc-400 text-sm font-normal font-['Rubik']" placeholder='Please Input here.' onChange={text => setFormData({ ...formData, city: text.target.value })}  />
							</div>
							<div className="w-[944px] h-[57px] flex-col justify-start items-start gap-2 inline-flex">
								<div className="self-stretch justify-between items-center inline-flex">
									<div className="text-neutral-600 text-sm font-medium font-['Rubik']">State</div>
									<div className="h-3 justify-between items-center flex">
										<div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
									</div>
								</div>
								<input type='text' className="self-stretch outline-none h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex text-zinc-400 text-sm font-normal font-['Rubik']" placeholder='Please Input here.' onChange={text => setFormData({ ...formData, state: text.target.value })} />
							</div>
							<div className="w-[944px] h-[18px] flex-col justify-start items-start gap-2 inline-flex">
								<div className="self-stretch justify-between items-end inline-flex">
									<div className="flex-col justify-start items-start gap-2 inline-flex">
										<div className="text-neutral-600 text-sm font-medium font-['Rubik']">Customer Service/ Success Support?</div>
									</div>
									{/* <div className="w-[34px] h-[18px] pl-px pr-[17px] py-px bg-zinc-400 rounded-[32px] justify-start items-center flex"> */}
										<input type='checkbox' className="w-4 h-4 relative bg-white rounded-[32px]" onClick={text => setFormData({ ...formData, type: text.target.checked }) } />
									{/* </div> */}
								</div>
							</div>
							<div className="w-[944px] h-[57px] flex-col justify-start items-start gap-2 inline-flex">
								<div className="self-stretch justify-between items-center inline-flex">
									<div className="text-neutral-600 text-sm font-medium font-['Rubik']">Create Date</div>
									<div className="h-3 justify-between items-center flex">
										<div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
									</div>
								</div>
								<input type='text' className="self-stretch outline-none h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex text-zinc-400 text-sm font-normal font-['Rubik']" placeholder='Please Input here.' onChange={text => setFormData({ ...formData, createdDate: new Date(text.target.value) })} />
							</div>
							<div className="w-[944px] h-[57px] flex-col justify-start items-start gap-2 inline-flex">
								<div className="self-stretch justify-between items-center inline-flex">
									<div className="text-neutral-600 text-sm font-medium font-['Rubik']">Expire Date</div>
									<div className="h-3 justify-between items-center flex">
										<div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">Required</div>
									</div>
								</div>
								<input type='text' className="self-stretch outline-none h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex text-zinc-400 text-sm font-normal font-['Rubik']" placeholder='Please Input here.' onChange={text => setFormData({ ...formData, expirationDate: new Date(text.target.value) })} />
							</div>
							<div className="w-[944px] h-8 flex-col justify-end items-end gap-2.5 inline-flex">
								<button  className="w-30 px-6 py-2 bg-indigo-900 rounded-lg justify-center items-center gap-2.5 flex" onClick={() => onSubmit()} >
									<div className="w-5 h-5 pl-[3.33px] pr-[2.61px] pt-[1.67px] pb-[1.63px] justify-center items-center flex">
											<FaCheck className="w-5 h-5 relative" fill= "white"/>
										</div>
									<div className="text-slate-200 text-sm pl-7 font-normal font-['Rubik'] capitalize">Submit</div>
								</button>
							</div>
						</div>
					</div>
			</div>
		</div>
		</>
	);
};

export default JobList;
