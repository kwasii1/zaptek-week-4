import Navbar from "../components/Navbar";
import headerimg from "../assets/header.png";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import thumb from "../assets/thumb-concept.png";
import vector from "../assets/Vector.png";
import vector1 from "../assets/Vector (1).png";
import vector2 from "../assets/Vector (2).png";
import vector3 from "../assets/Vector (3).png";
import vector4 from "../assets/Vector (4).png";
import vector5 from "../assets/Vector (5).png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import profile from "../assets/profile.png";
import {
	StarIcon,
	ChevronRightIcon,
	ArrowDownTrayIcon,
	HeartIcon,
	ShoppingCartIcon,
	EyeIcon,
	CheckIcon,
	PhoneIcon,
	MapPinIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
	return (
		<>
			<section className="flex flex-col mb-20 w-full">
				<Navbar />
				<img
					src={headerimg}
					alt=""
					className="absolute z-0 inset-0 w-full"
				/>
				<div className="flex flex-col z-10 py-10 w-3/4 self-center gap-y-10">
					<div className="flex flex-col gap-y-10">
						<p className="text-xs font-bold text-red-500">
							For Better Future
						</p>
						<h1 className="text-6xl font-semibold uppercase">
							High Quality <br></br>Courses
						</h1>
						<p className="text-gray-600 font-medium">
							Everyday brings with it a fresh <br /> set of
							learning possibilities
						</p>
						<div className="flex lg:flex-row flex-col gap-y-5 gap-x-5">
							<button className="py-3 px-7 rounded-md text-white bg-red-500 text-xs font-bold">
								Get Quote Now
							</button>
							<button className="py-3 px-7 rounded-md text-red-500 bg-transparent text-xs font-bold border border-red-500">
								Learn More
							</button>
						</div>
					</div>
					<div className="flex lg:flex-row flex-col gap-y-10 gap-x-10">
						<div className="bg-white flex flex-col p-10 gap-y-5 lg:w-1/3 shadow-gray-200 shadow-xl justify-center">
							<div className="bg-red-500 p-5 rounded-md w-fit">
								<img src={icon1} alt="" />
							</div>
							<h3 className="font-bold">Expert Instruction</h3>
							<hr className="border-red-500 border w-8" />
							<p className="text-gray-600 tex-xs">
								The gradual accumulation of <br /> information
								about atomic and <br /> small-scale behaviour...
							</p>
						</div>
						<div className="bg-white flex flex-col p-10 gap-y-5 lg:w-1/3 shadow-gray-200 shadow-xl justify-center">
							<div className="bg-blue-800 p-5 rounded-md w-fit">
								<img src={icon2} alt="" />
							</div>
							<h3 className="font-bold">Expert Instruction</h3>
							<hr className="border-red-500 border w-8" />
							<p className="text-gray-600 tex-xs">
								The gradual accumulation of <br /> information
								about atomic and <br /> small-scale behaviour...
							</p>
						</div>
						<div className="bg-white flex flex-col p-10 gap-y-5 lg:w-1/3 shadow-gray-200 shadow-xl justify-center">
							<div className="bg-yellow-500 p-5 rounded-md w-fit">
								<img src={icon3} alt="" />
							</div>
							<h3 className="font-bold">Expert Instruction</h3>
							<hr className="border-red-500 border w-8" />
							<p className="text-gray-600 tex-xs">
								The gradual accumulation of <br /> information
								about atomic and <br /> small-scale behaviour...
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="flex lg:flex-row flex-col mt-20 lg:p-32 p-5">
				<div className="lg:w-1/2 flex justify-center">
					<img src={thumb} alt="" />
				</div>
				<div className="lg:w-1/2 flex flex-col gap-y-10 py-20 lg:pl-10 p-5">
					<hr className="border-red-500 border-2 w-12" />
					<h3 className="font-bold text-3xl">
						Get Quality <br /> Education
					</h3>
					<p className="text-gray-600 tex-xs">
						Problems trying to resolve the conflict between <br />{" "}
						the two major realms of Classical physics: <br />{" "}
						Newtonian mechanics{" "}
					</p>
					<p className="text-red-500 text-xs flex flex-row gap-x-3">
						Learn More <ChevronRightIcon className="w-4 h-4" />
					</p>
				</div>
			</section>
			<section className="flex lg:flex-row md:flex-row flex-wrap flex-col gap-y-20 p-20 justify-center gap-x-20">
				<img src={vector} className="w-28 mx-auto" alt="" />
				<img src={vector1} className="w-28 mx-auto" alt="" />
				<img src={vector2} className="w-28 mx-auto" alt="" />
				<img src={vector3} className="w-28 mx-auto" alt="" />
				<img src={vector4} className="w-28 mx-auto" alt="" />
				<img src={vector5} className="w-28 mx-auto" alt="" />
			</section>
			<section className="flex flex-col bg-blue-950 lg:p-32 p-5 gap-y-10">
				<div className="flex flex-col gap-y-5">
					<p className="text-xs font-bold text-red-500">
						Practice Advice
					</p>
					<h1 className="text-6xl font-semibold text-white">
						Our Popular Courses
					</h1>
					<p className="text-white">
						Problems trying to resolve the conflict between <br />
						the two major realms of Classical physics: Newtonian
						mechanics{" "}
					</p>
				</div>
				<div className="flex lg:flex-row md:flex-row flex-col gap-y-10 justify-center gap-x-5">
					<div className="flex flex-col bg-white lg:w-1/3">
						<div className="flex flex-col">
							<img src={img1} className="relative z-0" alt="" />
							<p className="text-white z-10 py-1 px-2 rounded mt-2 ml-2 text-xs font-bold bg-red-500 absolute w-fit">
								Sale
							</p>
							<div className="flex flex-row gap-x-5 bottom-20 relative w-fit mx-auto">
								<HeartIcon className="h-10 w-10 rounded-full bg-white p-2" />
								<ShoppingCartIcon className="h-10 w-10 rounded-full bg-white p-2" />
								<EyeIcon className="h-10 w-10 rounded-full bg-white p-2" />
							</div>
						</div>
						<div className="flex flex-col gap-y-5 p-5">
							<div className="flex flex-row justify-between">
								<p className="text-xs font-bold text-red-500">
									Training Courses
								</p>
								<p className="flex flex-row gap-x-2 items-center bg-blue-950 p-1 rounded-full text-white text-xs">
									<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
									4.9
								</p>
							</div>
							<p className="font-bold">Video in Live Action</p>
							<p className="text-xs text-gray-600">
								We focus on ergonomics and meeting <br />
								you where you work. It is only a <br />
								keystroke away.
							</p>
							<div className="">
								<p className="flex flex-row gap-x-2 items-center font-bold text-xs text-gray-600">
									<ArrowDownTrayIcon className="w-4 h-4" /> 15
									Sales
								</p>
							</div>
							<div className="flex flex-row gap-x-5">
								<p className="font-bold text-xs text-gray-300">
									$16.48
								</p>
								<p className="font-bold text-xs text-blue-800">
									$6.48
								</p>
							</div>
							<button className="flex flex-row gap-x-2 items-center py-3 px-7 rounded-full text-red-500 bg-transparent text-xs font-bold border border-red-500 lg:w-1/2 w-3/4">
								Learn More{" "}
								<ChevronRightIcon className="text-red-500 w-4 h-4" />
							</button>
						</div>
					</div>
					<div className="flex flex-col bg-white lg:w-1/3">
						<div className="flex flex-col">
							<img src={img2} className="relative z-0" alt="" />
							<p className="text-white z-10 py-1 px-2 rounded mt-2 ml-2 text-xs font-bold bg-red-500 absolute w-fit">
								Sale
							</p>
							<div className="flex flex-row gap-x-5 bottom-20 relative w-fit mx-auto">
								<HeartIcon className="h-10 w-10 rounded-full bg-white p-2" />
								<ShoppingCartIcon className="h-10 w-10 rounded-full bg-white p-2" />
								<EyeIcon className="h-10 w-10 rounded-full bg-white p-2" />
							</div>
						</div>
						<div className="flex flex-col gap-y-5 p-5">
							<div className="flex flex-row justify-between">
								<p className="text-xs font-bold text-red-500">
									Books Library
								</p>
								<p className="flex flex-row gap-x-2 items-center bg-blue-950 p-1 rounded-full text-white text-xs">
									<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
									4.9
								</p>
							</div>
							<p className="font-bold">Every Client Matters</p>
							<p className="text-xs text-gray-600">
								We focus on ergonomics and meeting <br />
								you where you work. It is only a <br />
								keystroke away.
							</p>
							<div className="">
								<p className="flex flex-row gap-x-2 items-center font-bold text-xs text-gray-600">
									<ArrowDownTrayIcon className="w-4 h-4" /> 15
									Sales
								</p>
							</div>
							<div className="flex flex-row gap-x-5">
								<p className="font-bold text-xs text-gray-300">
									$16.48
								</p>
								<p className="font-bold text-xs text-blue-800">
									$6.48
								</p>
							</div>
							<button className="flex flex-row gap-x-2 items-center py-3 px-7 rounded-full text-red-500 bg-transparent text-xs font-bold border border-red-500 lg:w-1/2 w-3/4">
								Learn More{" "}
								<ChevronRightIcon className="text-red-500 w-4 h-4" />
							</button>
						</div>
					</div>
					<div className="flex flex-col bg-white lg:w-1/3">
						<div className="flex flex-col">
							<img src={img3} className="relative z-0" alt="" />
							<p className="text-white z-10 py-1 px-2 rounded mt-2 ml-2 text-xs font-bold bg-red-500 absolute w-fit">
								Sale
							</p>
							<div className="flex flex-row gap-x-5 bottom-20 relative w-fit mx-auto">
								<HeartIcon className="h-10 w-10 rounded-full bg-white p-2" />
								<ShoppingCartIcon className="h-10 w-10 rounded-full bg-white p-2" />
								<EyeIcon className="h-10 w-10 rounded-full bg-white p-2" />
							</div>
						</div>
						<div className="flex flex-col gap-y-5 p-5">
							<div className="flex flex-row justify-between">
								<p className="text-xs font-bold text-red-500">
									Certified Teachers
								</p>
								<p className="flex flex-row gap-x-2 items-center bg-blue-950 p-1 rounded-full text-white text-xs">
									<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
									4.9
								</p>
							</div>
							<p className="font-bold">Get Quality Education</p>
							<p className="text-xs text-gray-600">
								We focus on ergonomics and meeting <br />
								you where you work. It is only a <br />
								keystroke away.
							</p>
							<div className="">
								<p className="flex flex-row gap-x-2 items-center font-bold text-xs text-gray-600">
									<ArrowDownTrayIcon className="w-4 h-4" /> 15
									Sales
								</p>
							</div>
							<div className="flex flex-row gap-x-5">
								<p className="font-bold text-xs text-gray-300">
									$16.48
								</p>
								<p className="font-bold text-xs text-blue-800">
									$6.48
								</p>
							</div>
							<button className="flex flex-row gap-x-2 items-center py-3 px-7 rounded-full text-red-500 bg-transparent text-xs font-bold border border-red-500 lg:w-1/2 w-3/4">
								Learn More{" "}
								<ChevronRightIcon className="text-red-500 w-4 h-4" />
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col lg:p-32 p-5 gap-y-10">
				<div className="flex flex-col gap-y-5">
					<p className="text-xs font-bold text-red-500">
						Practice Advice
					</p>
					<h1 className="text-3xl font-semibold">
						Watch Our Courses
					</h1>
					<p className="">
						Problems trying to resolve the conflict between <br />
						the two major realms of Classical physics: Newtonian
						mechanics{" "}
					</p>
				</div>
				<div className="flex lg:flex-row md:flex-row md:flex-wrap lg:flex-nowrap flex-col justify-center gap-x-10">
					<div className="flex flex-col gap-y-10 shadow-gray-200 shadow-xl p-10 lg:w-1/3 md:w-1/3">
						<HeartIcon className="bg-red-500 rounded-full p-5 fill-white text-white w-20" />
						<p className="text-xl font-bold">FREE</p>
						<p className="text-xs text-gray-600 font-thin">
							Organize across all apps by <br /> hand
						</p>
						<div className="flex flex-col">
							<p className="text-3xl text-red-500 font-bold">
								$19
							</p>
							<p className="text-xs text-blue-300 font-semibold">
								Per Month
							</p>
						</div>
						<p className="text-xs text-gray-600 font-thin">
							Slate helps you see how <br /> many more days you
							need...
						</p>
						<button className="py-3 px-7 rounded-md text-white bg-red-500 text-xs font-bold">
							Try For Free
						</button>
						<div className="flex flex-col gap-y-5">
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-green-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								Unlimited Product Updates{" "}
							</p>
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-green-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								Unlimited Product Updates{" "}
							</p>
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-green-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								Unlimited Product Updates{" "}
							</p>
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-gray-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								1GB Cloud Storage{" "}
							</p>
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-gray-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								1GB Cloud Storage{" "}
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-y-10 shadow-gray-200 shadow-xl p-10 lg:w-1/3 md:w-1/3">
                        <p className="bg-orange-500 p-10 w-20 h-20 text-white font-bold relative -top-10 -right-3/4 lg:-top-10 lg:-right-full flex items-center justify-center text-lg rounded-full">New</p>
						<HeartIcon className="bg-red-500 absolute rounded-full p-5 fill-white text-white w-20" />
						<p className="text-xl font-bold">FREE</p>
						<p className="text-xs text-gray-600 font-thin">
							Organize across all apps by <br /> hand
						</p>
						<div className="flex flex-col">
							<p className="text-3xl text-red-500 font-bold">
								$19
							</p>
							<p className="text-xs text-blue-300 font-semibold">
								Per Month
							</p>
						</div>
						<p className="text-xs text-gray-600 font-thin">
							Slate helps you see how <br /> many more days you
							need...
						</p>
						<button className="py-3 px-7 rounded-md text-white bg-red-500 text-xs font-bold">
							Try For Free
						</button>
						<div className="flex flex-col gap-y-5">
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-green-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								Unlimited Product Updates{" "}
							</p>
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-green-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								Unlimited Product Updates{" "}
							</p>
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-green-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								Unlimited Product Updates{" "}
							</p>
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-gray-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								1GB Cloud Storage{" "}
							</p>
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-gray-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								1GB Cloud Storage{" "}
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-y-10 shadow-gray-200 shadow-xl p-10 lg:w-1/3 md:w-1/3">
						<HeartIcon className="bg-red-500 rounded-full p-5 fill-white text-white w-20" />
						<p className="text-xl font-bold">FREE</p>
						<p className="text-xs text-gray-600 font-thin">
							Organize across all apps by <br /> hand
						</p>
						<div className="flex flex-col">
							<p className="text-3xl text-red-500 font-bold">
								$19
							</p>
							<p className="text-xs text-blue-300 font-semibold">
								Per Month
							</p>
						</div>
						<p className="text-xs text-gray-600 font-thin">
							Slate helps you see how <br /> many more days you
							need...
						</p>
						<button className="py-3 px-7 rounded-md text-white bg-red-500 text-xs font-bold">
							Try For Free
						</button>
						<div className="flex flex-col gap-y-5">
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-green-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								Unlimited Product Updates{" "}
							</p>
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-green-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								Unlimited Product Updates{" "}
							</p>
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-green-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								Unlimited Product Updates{" "}
							</p>
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-gray-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								1GB Cloud Storage{" "}
							</p>
							<p className="text-xs font-bold flex flex-row gap-x-2 items-center">
								<CheckIcon className="bg-gray-600 rounded-full p-1 font-bold text-white w-6 h-6" />{" "}
								1GB Cloud Storage{" "}
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col lg:p-32 p-5 gap-y-10">
				<div className="flex flex-col gap-y-5">
					<p className="text-xs font-bold text-red-500">
						Practice Advice
					</p>
					<h1 className="text-3xl font-semibold">
						Approdable Packages
					</h1>
					<p className="">
						Problems trying to resolve the conflict between <br />
						the two major realms of Classical physics: Newtonian
						mechanics{" "}
					</p>
				</div>
				<div className="flex lg:flex-row md:flex-row flex-col justify-center">
					<div className="flex flex-col gap-y-5 lg:p-20 p-10 justify-center">
						<div className="flex flex-row gap-x-1 justify-center">
							<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
							<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
							<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
							<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
							<StarIcon className="text-yellow-500 w-4 h-4 fill-white" />
						</div>
						<p className="text-xs font-bold text-gray-600 text-center">
							Slate helps you see <br />
							how many more days <br />
							you need to work to <br />
							reach your financial <br />
							goal for the month <br />
							and year.
						</p>
						<div className="flex-row flex items-center gap-x-2 justify-center">
							<img src={profile} alt="" />
							<div className="flex-col">
								<p className="text-xs font-bold text-red-500">
									Regina Miles
								</p>
								<p className="text-xs font-bold text-gray-500">
									Designer
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-y-5 lg:p-20 p-10">
						<div className="flex flex-row gap-x-1 justify-center">
							<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
							<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
							<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
							<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
							<StarIcon className="text-yellow-500 w-4 h-4 fill-white" />
						</div>
						<p className="text-xs font-bold text-gray-600 text-center">
							Slate helps you see <br />
							how many more days <br />
							you need to work to <br />
							reach your financial <br />
							goal for the month <br />
							and year.
						</p>
						<div className="flex-row flex items-center gap-x-2 justify-center">
							<img src={profile} alt="" />
							<div className="flex-col">
								<p className="text-xs font-bold text-red-500">
									Regina Miles
								</p>
								<p className="text-xs font-bold text-gray-500">
									Designer
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-y-5 lg:p-20 p-10">
						<div className="flex flex-row gap-x-1 justify-center">
							<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
							<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
							<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
							<StarIcon className="text-yellow-500 w-4 h-4 fill-yellow-500" />
							<StarIcon className="text-yellow-500 w-4 h-4 fill-white" />
						</div>
						<p className="text-xs font-bold text-gray-600 text-center">
							Slate helps you see <br />
							how many more days <br />
							you need to work to <br />
							reach your financial <br />
							goal for the month <br />
							and year.
						</p>
						<div className="flex-row flex items-center gap-x-2 justify-center">
							<img src={profile} alt="" />
							<div className="flex-col">
								<p className="text-xs font-bold text-red-500">
									Regina Miles
								</p>
								<p className="text-xs font-bold text-gray-500">
									Designer
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col justify-center lg:p-32 p-5 gap-y-10">
				<div className="flex flex-col gap-y-5">
					<p className="text-red-500 font-bold text-xs text-center">
						Newsletter
					</p>
					<h3 className="text-3xl font-bold text-center">
						Most Popular Courses
					</h3>
					<p className="text-center text-gray-600">
						Problems trying to resolve the conflict between <br />{" "}
						the two major realms of Classical physics: Newtonian
						mechanics
					</p>
				</div>
				<form action="">
					<div className="flex lg:flex-row flex-col gap-y-5 justify-center">
						<input
							type="text"
							className="bg-gray-100 border lg:w-1/4 border-gray-200 p-3 rounded"
							placeholder="Your Email"
						/>
						<button className="bg-red-500 text-white text-xs p-3 gap-x-0 lg:rounded-r rounded">
							Subscribe
						</button>
					</div>
				</form>
			</section>
			<section className="flex flex-col lg:p-32 md:p-10 p-5 pb-5 gap-y-10">
				<div className="flex lg:flex-row md:flex-row flex-col gap-y-10 lg:gap-x-10  justify-center md:flex-wrap lg:flex-nowrap">
					<div className="flex flex-col gap-y-5 lg:justify-start justify-center text-center md:w-1/3">
						<p className="font-bold">Company Info</p>
						<p className="font-thin">About Us</p>
						<p className="font-thin">Carrier</p>
						<p className="font-thin">We are Hiring</p>
						<p className="font-thin">Blog</p>
					</div>
					<div className="flex flex-col gap-y-5 lg:justify-start justify-center text-center md:w-1/3">
						<p className="font-bold">Legal</p>
						<p className="font-thin">About Us</p>
						<p className="font-thin">Carrier</p>
						<p className="font-thin">We are Hiring</p>
						<p className="font-thin">Blog</p>
					</div>
					<div className="flex flex-col gap-y-5 lg:justify-start justify-center text-center md:w-1/3">
						<p className="font-bold">Resources</p>
						<p className="font-thin">IOS and Android</p>
						<p className="font-thin">Watch a Demo</p>
						<p className="font-thin">Customers</p>
						<p className="font-thin">API</p>
					</div>
					<div className="flex flex-col gap-y-5 lg:justify-start justify-center text-center md:w-1/3">
						<p className="font-bold">Features</p>
						<p className="font-thin">Business Marketing</p>
						<p className="font-thin">User Analytics</p>
						<p className="font-thin">Live Chat</p>
						<p className="font-thin">Unlimited Support</p>
					</div>
					<div className="flex flex-col gap-y-5 lg:justify-start justify-center text-center md:w-1/3">
						<p className="font-bold">Get In Touch</p>
						<p className="justify-center lg:justify-start font-thin flex flex-row items-center gap-x-5">
							<PhoneIcon className="text-red-500 w-6 h-6" />
							About Us
						</p>
						<p className="justify-center lg:justify-start font-thin flex flex-row items-center gap-x-5">
							<MapPinIcon className="text-red-500 w-6 h-6" />
							Carrier <br /> Kentucky{" "}
						</p>
						<p className="justify-center lg:justify-start font-thin flex flex-row items-center gap-x-5">
							<EnvelopeIcon className="text-red-500 w-6 h-6" />
							Blog
						</p>
					</div>
				</div>
			</section>
			<section className="bg-gray-100 px-10 lg:px-32 py-5">
				<div className="flex lg:flex-row flex-col justify-between gap-y-5">
					<p className="text-xs font-bold text-gray-600">
						Made With Love By Baidoo All Rights Reserved
					</p>
					<div className="flex flex-row gap-x-5">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_2685_1402)">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M23.5 11.5704C23.5 5.1801 18.3515 0 12.0014 0C5.64848 0.00143732 0.5 5.1801 0.5 11.5719C0.5 17.3456 4.7056 22.1319 10.2019 23V14.9151H7.28415V11.5719H10.2048V9.02062C10.2048 6.12155 11.9224 4.52037 14.5484 4.52037C15.8075 4.52037 17.1226 4.74603 17.1226 4.74603V7.59193H15.6724C14.2451 7.59193 13.7995 8.4845 13.7995 9.40008V11.5704H16.9875L16.4787 14.9136H13.7981V22.9986C19.2944 22.1304 23.5 17.3441 23.5 11.5704Z"
									fill="#FF6551"
								/>
							</g>
							<defs>
								<clipPath id="clip0_2685_1402">
									<rect width="24" height="24" fill="white" />
								</clipPath>
							</defs>
						</svg>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_2685_1405)">
								<path
									d="M12.5 1C9.51488 1 9.1395 1.01375 7.96663 1.066C6.79375 1.121 5.99487 1.30525 5.295 1.5775C4.56088 1.85363 3.89593 2.28676 3.34663 2.84663C2.7871 3.39621 2.35402 4.06108 2.0775 4.795C1.80525 5.4935 1.61963 6.29375 1.566 7.4625C1.51375 8.63812 1.5 9.01213 1.5 12.0014C1.5 14.9879 1.51375 15.3619 1.566 16.5347C1.621 17.7062 1.80525 18.5051 2.0775 19.205C2.35938 19.9282 2.73475 20.5415 3.34663 21.1534C3.95713 21.7652 4.57037 22.142 5.29363 22.4225C5.99487 22.6947 6.79238 22.8804 7.96388 22.934C9.13813 22.9862 9.51213 23 12.5 23C15.4879 23 15.8605 22.9862 17.0347 22.934C18.2049 22.879 19.0065 22.6947 19.7064 22.4225C20.44 22.1462 21.1045 21.7131 21.6534 21.1534C22.2652 20.5415 22.6406 19.9282 22.9225 19.205C23.1934 18.5051 23.379 17.7062 23.434 16.5347C23.4862 15.3619 23.5 14.9879 23.5 12C23.5 9.01213 23.4862 8.63813 23.434 7.46388C23.379 6.29375 23.1934 5.4935 22.9225 4.795C22.646 4.06106 22.2129 3.39618 21.6534 2.84663C21.1042 2.28655 20.4392 1.85339 19.705 1.5775C19.0037 1.30525 18.2035 1.11963 17.0334 1.066C15.8591 1.01375 15.4865 1 12.4973 1H12.5014H12.5ZM11.5141 2.98275H12.5014C15.4384 2.98275 15.7862 2.99238 16.9454 3.046C18.0179 3.09413 18.6009 3.27425 18.9886 3.42412C19.5015 3.6235 19.8686 3.86275 20.2536 4.24775C20.6386 4.63275 20.8765 4.9985 21.0759 5.51275C21.2271 5.89913 21.4059 6.48213 21.454 7.55463C21.5076 8.71375 21.5186 9.06163 21.5186 11.9973C21.5186 14.9329 21.5076 15.2821 21.454 16.4412C21.4059 17.5138 21.2258 18.0954 21.0759 18.4831C20.8995 18.9607 20.618 19.3926 20.2522 19.7467C19.8672 20.1318 19.5015 20.3696 18.9873 20.569C18.6023 20.7203 18.0192 20.899 16.9454 20.9485C15.7862 21.0007 15.4384 21.0131 12.5014 21.0131C9.56437 21.0131 9.21513 21.0007 8.056 20.9485C6.9835 20.899 6.40188 20.7203 6.01412 20.569C5.53631 20.3929 5.10405 20.1119 4.74913 19.7467C4.38303 19.392 4.10112 18.9598 3.92412 18.4818C3.77425 18.0954 3.59413 17.5124 3.546 16.4399C3.49375 15.2807 3.48275 14.9329 3.48275 11.9945C3.48275 9.0575 3.49375 8.711 3.546 7.55187C3.5955 6.47937 3.77425 5.89638 3.9255 5.50863C4.12488 4.99575 4.36413 4.62862 4.74913 4.24362C5.13412 3.85862 5.49987 3.62075 6.01412 3.42138C6.40188 3.27012 6.9835 3.09138 8.056 3.04188C9.07075 2.99513 9.464 2.98137 11.5141 2.98V2.98275ZM18.3726 4.80875C18.1993 4.80875 18.0276 4.84289 17.8675 4.90923C17.7073 4.97557 17.5618 5.0728 17.4392 5.19537C17.3167 5.31794 17.2194 5.46346 17.1531 5.62361C17.0868 5.78376 17.0526 5.9554 17.0526 6.12875C17.0526 6.30209 17.0868 6.47374 17.1531 6.63389C17.2194 6.79404 17.3167 6.93956 17.4392 7.06213C17.5618 7.1847 17.7073 7.28193 17.8675 7.34827C18.0276 7.41461 18.1993 7.44875 18.3726 7.44875C18.7227 7.44875 19.0585 7.30968 19.306 7.06213C19.5536 6.81458 19.6926 6.47884 19.6926 6.12875C19.6926 5.77866 19.5536 5.44292 19.306 5.19537C19.0585 4.94782 18.7227 4.80875 18.3726 4.80875ZM12.5014 6.3515C11.7521 6.33981 11.008 6.47729 10.3123 6.75594C9.61671 7.0346 8.98346 7.44885 8.44946 7.97458C7.91546 8.50032 7.49138 9.12703 7.20191 9.81823C6.91244 10.5094 6.76336 11.2513 6.76336 12.0007C6.76336 12.7501 6.91244 13.4919 7.20191 14.1831C7.49138 14.8743 7.91546 15.5011 8.44946 16.0268C8.98346 16.5525 9.61671 16.9668 10.3123 17.2454C11.008 17.5241 11.7521 17.6616 12.5014 17.6499C13.9844 17.6267 15.3988 17.0214 16.4393 15.9645C17.4799 14.9076 18.0631 13.4839 18.0631 12.0007C18.0631 10.5175 17.4799 9.09382 16.4393 8.03691C15.3988 6.97999 13.9844 6.37464 12.5014 6.3515ZM12.5014 8.33288C13.474 8.33288 14.4067 8.71923 15.0944 9.40695C15.7821 10.0947 16.1685 11.0274 16.1685 12C16.1685 12.9726 15.7821 13.9053 15.0944 14.593C14.4067 15.2808 13.474 15.6671 12.5014 15.6671C11.5288 15.6671 10.596 15.2808 9.90833 14.593C9.22061 13.9053 8.83425 12.9726 8.83425 12C8.83425 11.0274 9.22061 10.0947 9.90833 9.40695C10.596 8.71923 11.5288 8.33288 12.5014 8.33288Z"
									fill="#FF6551"
								/>
							</g>
							<defs>
								<clipPath id="clip0_2685_1405">
									<rect width="24" height="24" fill="white" />
								</clipPath>
							</defs>
						</svg>
						<svg
							width="24"
							height="20"
							viewBox="0 0 24 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_2685_1408)">
								<path
									d="M8.41075 19C16.713 19 21.2546 12.0731 21.2546 6.07669C21.2546 5.88285 21.2546 5.68625 21.2464 5.49241C22.1306 4.84789 22.8937 4.04993 23.5 3.13592C22.6741 3.50262 21.7988 3.7443 20.9026 3.85312C21.8466 3.28495 22.5536 2.391 22.8923 1.3374C22.0054 1.86647 21.0346 2.23787 20.0226 2.43534C19.3423 1.70572 18.4419 1.22237 17.4611 1.06016C16.4803 0.897946 15.4737 1.06592 14.5973 1.53807C13.7209 2.01023 13.0236 2.7602 12.6134 3.67182C12.2031 4.58345 12.1029 5.60585 12.3281 6.58066C10.5334 6.49005 8.77762 6.02057 7.17468 5.20269C5.57175 4.3848 4.15744 3.23678 3.0235 1.83307C2.44784 2.83421 2.27216 4.01843 2.53214 5.14526C2.79211 6.27209 3.46825 7.25705 4.42325 7.90013C3.70762 7.87565 3.00772 7.68215 2.38 7.33524V7.39754C2.38123 8.44631 2.74205 9.46247 3.40145 10.2743C4.06086 11.0861 4.9784 11.6438 5.999 11.853C5.61161 11.9605 5.21144 12.014 4.80963 12.0122C4.52635 12.0131 4.24365 11.9867 3.96537 11.9333C4.25383 12.8361 4.8155 13.6254 5.57171 14.1908C6.32793 14.7561 7.24081 15.0691 8.1825 15.0859C6.58276 16.3511 4.60668 17.0373 2.5725 17.034C2.21407 17.0355 1.85588 17.0147 1.5 16.9716C3.56458 18.297 5.96228 19.0008 8.41075 19Z"
									fill="#FF6551"
								/>
							</g>
							<defs>
								<clipPath id="clip0_2685_1408">
									<rect
										width="24"
										height="19.7647"
										fill="white"
										transform="translate(0 0.117188)"
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
			</section>
		</>
	);
}
