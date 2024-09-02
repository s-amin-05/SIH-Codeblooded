import React from 'react'
import img1 from '../../assets/3.png'
import img2 from '../../assets/seoprofile.jpg'
import img3 from '../../assets/worker2r.jpg'
import img4 from '../../assets/worker3.webp'
import img5 from '../../assets/workers.avif'

function Home() {
    return (
        <>
        <div className="relative bg-[url('../../../asssets/worker2r.jpg')] bg-cover bg-top h-[70vh] text-white flex flex-col justify-center p-10 text-left
        "
         >
    <h1 className="text-6xl text-[#3c3633]">Find talent your way</h1>
    <p className="text-2xl text-[#747264] mt-5 max-w-lg">Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.</p>
    <div className="flex gap-5 mt-12">
        <a href="#" className="bg-[#3c3633] bg-opacity-90 p-5 rounded-lg text-white text-xl flex-1 flex flex-col justify-between">
            Post a job and hire a pro <span className="text-sm text-gray-400 mt-2">Talent Marketplace™ →</span>
        </a>
        <a href="#" className="bg-[#3c3633] bg-opacity-90 p-5 rounded-lg text-white text-xl flex-1 flex flex-col justify-between">
            Browse and buy projects <span className="text-sm text-gray-400 mt-2">Project Catalog™ →</span>
        </a>
        <a href="#" className="bg-[#3c3633] bg-opacity-90 p-5 rounded-lg text-white text-xl flex-1 flex flex-col justify-between">
            Get advice from industry experts <span className="text-sm text-gray-400 mt-2">Consultations →</span>
        </a>
    </div>
</div>


<div className="bg-white py-10">
    <div className="container mx-auto flex justify-between items-center px-5">
        <div className="flex-1 text-left pr-5 pl-3">
            <h1 className="text-[#3c3633] text-6xl leading-snug">How work should work</h1>
            <p className="text-lg text-gray-600 mt-1 mb-14">Forget the old rules. You can have the best people.<br/>Right now. Right here.</p>
            <a href="#" className="bg-[#3c3633] bg-opacity-90 text-white px-5 py-3 rounded-lg text-lg">Get started</a>
        </div>
        <div className="flex-1 flex justify-end items-center">
            <img src={img4} alt="Illustration" className="w-full h-auto"/>
        </div>
    </div>
</div>


<div className="py-10">
    <div className="flex w-full items-center bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex-1 max-w-[50%]">
            <img src={img2} alt="Profile Picture" className="w-full h-auto"/>
        </div>
        <div className="flex-1 p-10">
            <h2 className="text-[#3c3633] text-5xl font-semibold mb-8">Up your work game, it's easy</h2>
            <ul className="list-none space-y-8">
                <li className="text-xl"><strong>No cost to join</strong><br/>Register and browse talent profiles, explore projects, or even book a consultation.</li>
                <li className="text-xl"><strong>Post a job and hire top talent</strong><br/>Finding talent doesn’t have to be a chore. Post a job or we can search for you!</li>
                <li className="text-xl"><strong>Work with the best—without breaking the bank</strong><br/>Upwork makes it affordable to up your work and take advantage of low transaction rates.</li>
            </ul>
            <div className="mt-8">
                <button className="bg-[#3c3633] text-white px-5 py-3 rounded-lg text-lg mr-5">Sign up for free</button>
                <button className="bg-transparent text-[#3c3633] px-5 py-3 border-2 border-[#3c3633] rounded-lg text-lg">Learn how to hire</button>
            </div>
        </div>
    </div>
</div>


<div className="bg-[#e0ccbe] h-screen flex items-center justify-center">
    <div className="flex h-[395px]">
        <div className="flex-1  bg-cover bg-center"
        style={{
            backgroundImage: `url(${img5})`
        }}></div>
        <div className="flex-1 text-[#3c3633] flex flex-col justify-center pl-16">
            <h2 className="text-2xl mb-3">Unlock Your Potential</h2>
            <h1 className="text-4xl mb-5">Discover Exciting Opportunities</h1>
            <p className="text-xl mb-10">Connect with visionary clients who inspire you and elevate your freelance journey to unprecedented heights.</p>
            <div className="flex space-x-5 mb-10">
                <div className="flex-1">
                    <span>Find opportunities for every stage of your freelance career</span>
                    <hr className="border-0 h-px bg-[#3c3633] my-2"/>
                </div>
                <div className="flex-1">
                    <span>Control when, where, and how you work</span>
                    <hr className="border-0 h-px bg-[#3c3633] my-2"/>
                </div>
                <div className="flex-1">
                    <span>Unlock Diverse Earning Opportunities</span>
                    <hr className="border-0 h-px bg-[#3c3633] my-2"/>
                </div>
            </div>
            <a href="#" className="bg-[#3c3633] text-[#eeedeb] px-8 py-4 rounded-md text-lg text-center">Find opportunities</a>
        </div>
    </div>
</div>


<footer>
    <div className="bg-gray-600 text-white flex justify-center items-center h-12">
        <a href="index.html" className="text-xl">Back to top</a>
    </div>

    <div className="bg-gray-700 text-white h-[350px] flex justify-evenly items-center">
        <ul>
            <p className="font-bold text-lg">Get to Know Us</p>
            <a href="#" className="block text-gray-300 mt-3 text-base">About Us</a>
            <a href="#" className="block text-gray-300 mt-3 text-base">Careers</a>
            <a href="#" className="block text-gray-300 mt-3 text-base">Press Releases</a>
            <a href="#" className="block text-gray-300 mt-3 text-base">Branches</a>
        </ul>

        <ul>
            <p className="font-bold text-lg">Connect with Us</p>
            <a href="#" className="block text-gray-300 mt-3 text-base">Facebook</a>
            <a href="#" className="block text-gray-300 mt-3 text-base">Twitter</a>
            <a href="#" className="block text-gray-300 mt-3 text-base">Instagram</a>
        </ul>

        <ul>
            <p className="font-bold text-lg">Let Us Help You</p>
            <a href="#" className="block text-gray-300 mt-3 text-base">Your Account</a>
            <a href="#" className="block text-gray-300 mt-3 text-base">Complaint</a>
            <a href="#" className="block text-gray-300 mt-3 text-base"> App Download</a>
            <a href="#" className="block text-gray-300 mt-3 text-base">Help</a>
        </ul>
    </div>

    

    <div className="bg-gray-800 text-white text-center h-20 flex flex-col justify-center">
        <p className="text-sm">Conditions of Use & Sale Privacy Notice Interest-Based Ads</p>
        <p className="text-sm mt-1">© 2005-2024, Proflex.com, Inc. or its affiliates</p>
    </div>
    </footer>
        </>
    )
}

export default Home
