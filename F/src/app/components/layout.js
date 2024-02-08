import { GoPersonAdd } from "react-icons/go";
import { BsBarChartLine } from "react-icons/bs";
import { LuBookUp, LuMessageSquare } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareYoutube } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
const Layout = ({ children }) => {
	return (<>
		<div className="PreHeader">
			<div className="w-full h-[69px] px-8 py-3.5 bg-white justify-center items-center gap-8 inline-flex">
				<div className="w-[1400px] h-[47px] justify-start items-center gap-8 inline-flex">
					<div className="w-[231px] h-[29px] justify-center items-center inline-flex">
						<img className='w-[231px] h-[29px] relative' src='/logo.png' alt='Logo image' />
					</div>
					<div className="w-[634px] h-8 pl-20 justify-center items-start gap-[54px] inline-flex">
						<div className="w-16 h-8 flex-col justify-center items-center gap-2 inline-flex">
							<div className="w-16 h-6 flex-col justify-center items-center gap-4 inline-flex">
								<div className="w-16 h-6 justify-center items-center gap-1.5 inline-flex">
									<GoPersonAdd className="w-5 h-5 relative" />
									<div className="text-blue-950 text-xl font-normal font-['Rubik']">Hire</div>
								</div>
							</div>
						</div>
						<div className="w-[72px] h-8 flex-col justify-center items-center gap-1 inline-flex">
							<div className="justify-center items-center gap-1.5 inline-flex">
								<BsBarChartLine className="w-5 h-5 relative" />
								<div className="text-neutral-600 text-xl font-normal font-['Rubik']">Lead</div>
							</div>
						</div>
						<div className="w-[72px] h-8 flex-col justify-center items-center gap-1 inline-flex">
							<div className="justify-center items-center gap-1.5 inline-flex">
								<LuBookUp className="w-5 h-5 relative" />	
								<div className="text-neutral-600 text-xl font-normal font-['Rubik']">Train</div>
							</div>
						</div>
						<div className="w-[135px] h-8 flex-col justify-center items-center gap-1 inline-flex">
							<div className="justify-center items-center gap-1.5 inline-flex">
								<LuMessageSquare className="w-5 h-5 relative" />
								<div className="text-neutral-600 text-xl font-normal font-['Rubik']">Community</div>
							</div>
						</div>
					</div>
					<div className="justify-start items-center gap-2.5 inline-flex ">
				        <span className="absolute flex pointer-events-auto items-center ">
							<FaSearch className="absolute text-slate-300 pl-2 h-6 w-6 relative " fill='white' />
						</span>
						<input type='text' className="h-9 px-8 py-2 bg-slate-200 outline-none rounded-2xl text-white text-sm font-normal  font-['Rubik']" placeholder='Search' />
					</div>
					<GoBell className="w-6 h-6 relative" />
					<div className="w-[166px] h-[47px] justify-start items-center gap-3 inline-flex">
						<div className="w-10 h-10 justify-center items-center flex">
							<img className="w-10 h-10 rounded-full border-2 border-slate-200" src="/avatar.png" />
						</div>
						<div className="flex-col justify-start items-start gap-1 inline-flex">
							<div className="text-neutral-600 text-xl font-medium font-['Rubik']">John Doe</div>
							<div className="text-zinc-400 text-base font-normal font-['Rubik']">Hiring Manager</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="Body">
			<div className="w-full h-[1237px] bg-black bg-opacity-0 flex-col justify-start items-center inline-flex">
						{children}
				<div className="w-full p-5 flex-col justify-start items-center gap-8 inline-flex">
					<div className="w-full h-[253px] px-8 py-12 bg-slate-200 rounded-2xl flex-col justify-start items-center gap-8 inline-flex">
						<div className=" h-[157px] flex-col justify-start items-start gap-8 inline-flex">
							<div className="w-[1400px] h-[108px] justify-start items-start gap-8 inline-flex">
								<div className="w-[254.40px] h-[108px] flex-col justify-start items-start gap-2.5 inline-flex">
									<div className="w-[231px] h-[29px] justify-center items-center inline-flex">
											<img className='w-[231px] h-[29px] relative' src='/logo.png' alt='Logo image' />
									</div>
									<div className="self-stretch grow shrink basis-0 text-blue-950 text-sm font-normal font-['Rubik']">
										Lorem ipsum dolor sit amet consectetur. 
										Lectus facilisi id bibendum quis consectetur egestas. </div>
								</div>
								<div className="w-[254.40px] h-[108px] flex-col justify-start items-start gap-2.5 inline-flex">
									<div className="text-indigo-900 text-lg font-medium font-['Rubik']">Bussiness</div>
									<div className="text-neutral-600 text-base font-normal font-['Rubik']">Hire</div>
									<div className="text-neutral-600 text-base font-normal font-['Rubik']">Training</div>
									<div className="text-neutral-600 text-base font-normal font-['Rubik']">Scaling</div>
								</div>
								<div className="w-[254.40px] h-[108px] flex-col justify-start items-start gap-2.5 inline-flex">
									<div className="text-indigo-900 text-lg font-medium font-['Rubik']">Bussiness</div>
									<div className="text-neutral-600 text-base font-normal font-['Rubik']">Hire</div>
									<div className="text-neutral-600 text-base font-normal font-['Rubik']">Training</div>
									<div className="text-neutral-600 text-base font-normal font-['Rubik']">Scaling</div>
								</div>
								<div className="w-[254.40px] h-[108px] flex-col justify-start items-start gap-2.5 inline-flex">
									<div className="text-indigo-900 text-lg font-medium font-['Rubik']">Bussiness</div>
									<div className="text-neutral-600 text-base font-normal font-['Rubik']">Hire</div>
									<div className="text-neutral-600 text-base font-normal font-['Rubik']">Training</div>
									<div className="text-neutral-600 text-base font-normal font-['Rubik']">Scaling</div>
								</div>
								<div className="w-[254.40px] h-[55px] flex-col justify-start items-start gap-2.5 inline-flex">
									<div className="text-indigo-900 text-lg font-medium font-['Rubik']">Fllow Us</div>
									<div className="justify-start items-start gap-4 inline-flex">
										<AiFillTwitterCircle className="w-6 h-6 relative"/>
										<FaSquareYoutube className="w-6 h-6 relative  rounded-2xl "/>
										<BsFacebook className="w-6 h-6 relative"/>
										<FaPinterest className="w-6 h-6 relative"/>
									</div>
								</div>
							</div>
						</div>
						<div className="w-4/5 h-[17px] justify-center items-start gap-2.5 inline-flex">
							<div>
								<span className="text-neutral-600 text-sm font-normal font-['Rubik']">Copyright © All rights reserved by </span>
								{/* <span className="text-blue-500 text-sm font-normal font-['Rubik'] underline">Salesmagiq</span> */}
								<a className="text-blue-500 text-sm font-normal font-['Rubik'] " href="https://www.">Salesmagiq</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};
export default Layout;
