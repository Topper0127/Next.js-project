"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import userservice from '../../../services/UserService';
import { ImSearch } from "react-icons/im";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { RiBook2Line } from "react-icons/ri";
import { CiFilter } from "react-icons/ci";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { FaRegPenToSquare } from "react-icons/fa6";
import { LiaCoinsSolid } from "react-icons/lia";
import { PiNoteDuotone } from "react-icons/pi";
import { GoPersonAdd } from "react-icons/go";




const JobList = () => {
	const router = useRouter();
	const [pageNum, setPageNum] = useState(1);
	const [pageSize, setPageSize] = useState(5);
	const [searchKey, setSearchKey] = useState("");
	const [filter, setFilter] = useState(2);
	const [total, setTotal] = useState([]);
	const [jobList, setJobList] = useState([]);

	useEffect(() => {
		userservice.getAll({pageNum, searchKey, filter}).then(res => {
		setJobList(res.data.total.rows);
		const data = [];
		for (let index = 1; index <= res.data.total.count / 8 + 1; index++) {
			data.push(index);
		  }
		setTotal(data);
	  })},[pageNum, searchKey, filter]);

	return (
		<>
		<div className="Header">
			<div className="w-full h-[184px] flex-col justify-start items-center gap-2.5 inline-flex relative">
			<img className='w-full h-[184px] bg-white bg-opacity-50' src='/joblist.png' alt='JOB image' />
			<div className="w-full h-full p-8 flex-col justify-start items-center gap-2.5 inline-flex absolute">
			<div className="w-[1400px] h-[120px]  flex-col justify-center items-start gap-6 inline-flex absolute">
				<div className="w-[738px] h-16 py-6 justify-start items-center gap-6 inline-flex">
					<div className="p-2 bg-slate-200 rounded-2xl justify-start items-center gap-2.5 flex">
						<GoPersonAdd className="w-12 h-12 relative"/>
					</div>
					<div className="flex-col justify-center items-start gap-2 inline-flex">
						<div className="text-neutral-600 text-[32px] font-normal font-['Rubik'] capitalize">My Jobs</div>
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
			<div className="w-full p-5 flex-col justify-start items-center gap-8 inline-flex">
				<div className="w-[1400px]  rounded-2xl flex-col justify-start items-start gap-8 inline-flex">
					<div className="w-[1400px] h-[732px] p-6 bg-white rounded-2xl flex-col justify-start items-start gap-3 inline-flex">
						<div className="self-stretch justify-start items-center gap-3 inline-flex">
							<div className="w-6 h-6 px-1 py-[3px] justify-center items-center flex">
								<RiBook2Line className="w-4 h-[18px] relative"/>
							</div>
							<div className="text-neutral-600 text-base font-normal font-['Rubik']">My All Jobs</div>
							<div></div>
							<div className="grow shrink basis-0 h-8 justify-end items-start gap-2.5 flex">
								<div className="justify-start items-center gap-2 flex">
									<span className="absolute flex pointer-events-auto items-center ">
										<ImSearch className="absolute flex text-slate-300 pl-2 w-6 h-6 relative" fill="currentColor" />
									</span>
									<input type='text' className="w-[141px] outline-none h-8 px-8 bg-white rounded-lg text-zinc-400 border text-sm font-normal font-['Rubik']" placeholder='Search' />
								</div>
								<div className="h-8 px-2 py-1 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 flex">
									<CiFilter className="w-[18px] h-[18px] relative"/>
									<div >
										<select className="grow shrink basis-0 outline-none text-zinc-400 text-sm font-normal font-['Rubik']">
											<option value="0">Filter</option>
											<option value="1">Audi</option>
											<option value="2">BMW</option>
											<option value="3">Citroen</option>
										</select>
									</div>
									{/* <div className="w-6 h-6 relative"></div> */}
								</div>
								<Link href={'post'}  className="w-[168px] px-6 py-2 bg-indigo-900 rounded-lg justify-center items-center gap-2.5 flex" >
									<div className="w-5 h-5 pl-[3.33px] pr-[2.61px] pt-[1.67px] pb-[1.63px] justify-center items-center flex">
										<FaRegPenToSquare className="w-[14.06px] h-[16.70px] relative" fill= "white"/>
									</div>
									<div className="text-slate-200 text-sm font-normal font-['Rubik'] capitalize">Post new job</div>
								</Link>
							</div>
						</div>
						<div className="self-stretch h-[584px] flex-col justify-start items-center flex">
							{
								jobList.map(item => (<>
									<div className="w-[1352px] h-[73px] py-2 border-b border-black border-opacity-0 justify-start items-center gap-3 inline-flex">
									<div className="w-10 h-10 bg-slate-200 rounded-[40px] border-2 border-slate-400 justify-start items-center gap-2.5 inline-flex">
										<PiHandbagSimpleBold className="w-7 h-7 pl-2" />
									</div>
									<div className="w-[1300px] h-[57px] flex-col justify-start items-start gap-2 inline-flex">
										<div className="w-[1300px] h-6 justify-start items-center gap-2 inline-flex">
											<div className="grow shrink basis-0 h-6 justify-between items-center flex">
												<div className="grow shrink basis-0 text-neutral-600 text-xl font-normal font-['Rubik']">{`${item.hiringManagerName}`}</div>
											</div>
											<div className="justify-start items-start gap-2 flex">
												<div className="justify-start items-center gap-2 flex">
													<div className="w-10 h-10 p-[2.25px] justify-center items-center flex">
														<LiaCoinsSolid className="w-6 h-6 relative" />
													</div>
													<div className="px-4 py-0.5 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 flex">
														<div className="text-white text-xs font-normal font-['Rubik']">{`fixed ${item ? item.salaryAmount: 0}$`}</div>
													</div>
												</div>
											</div>
										</div>
										<div className="w-[1300px] h-7 justify-start items-start gap-2 inline-flex">
											<div className=" justify-start items-start flex">
												<div className="w-5 h-5 justify-start items-start flex">
													<PiNoteDuotone className="w-5 h-5 relative" />
												</div>
											</div>
											<div className="grow shrink basis-0 text-zinc-400 text-xs font-light font-['Rubik']">
												{item ? `@${item.companyName}: ${item.email}_${item.address}, ${item.city}, ${item.state} ${item.zip}` : ""}
											</div>
										</div>
									</div>
								</div>
								</>
								))
							}
						</div>
						<div className="self-stretch h-8 flex-col justify-start items-center gap-2.5 flex">
							<div className="justify-start items-start gap-4 inline-flex">
								<button  onClick={() => {
										if (pageNum > 1) {
										setPageNum(pageNum - 1);
										}
									}}>
									<div className="w-9 p-2 bg-white focus:bg-gray-300 rounded-lg border border-indigo-900 justify-center items-center gap-2.5 flex">
										<FaAngleLeft className="w-5 h-5 relative" />
									</div>
								</button>

								{
									total.map((item) => (
										<button onClick={() => setPageNum(item)}>
											<div className="w-9 px-4 py-2 rounded-lg justify-center items-center gap-2.5 flex focus:bg-gray-300">
												<div className="text-neutral-600 text-sm font-normal font-['Rubik'] capitalize ">{item}</div>
											</div>
										</button>
									))
      							}		
								<button>
								<div className="w-9 p-2 bg-white rounded-lg border border-indigo-900 justify-center items-center gap-2.5 flex">
									<FaAngleRight className="w-5 h-5 relative" onClick={() => {
											if (pageNum < total.length) {
											setPageNum(pageNum + 1);
											}
										}}/>
								</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default JobList;
