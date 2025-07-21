import React from 'react';
import Link from 'next/link';
import './about.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function Page() {
  return (
    < >
      {/* <nav className="bg-zinc-100 shadow py-4 w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-start items-center">
            <div className="mx-5">
              <Link href="/">
                <h1 className="text-black font-bold text-[22px] pr-10">Transit<span className="text-yellow-500">Xpert</span></h1>
              </Link>
            </div>
            <div>
              <ul className="flex items-center">
                <li className="mr-6">
                  <Link href="/" className="text-slate-400 font-semibold hover:text-slate-700">Home</Link>
                </li>
                <li className="mr-6">
                  <Link href="/outstation" className="text-slate-400 font-semibold hover:text-slate-700">Outstation</Link>
                </li>
                <li className="mr-6">
                  <Link href="/about" className="text-slate-400 font-semibold hover:text-slate-700">About Us</Link>
                </li>
                <li className="mr-6">
                  <Link href="/contact" className="text-slate-400 font-semibold hover:text-slate-700">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}
      <header className="">
        <div className="flex flex-col md:flex-row h-screen md:mt-0 md:border-black">
          <div className='about md:pt-0 pt-11 pr-[50px] pl-[80px] flex flex-col items-start md:mt-[200px] h-full '>
            <h1 className="text-[60px] font-semibold ">About Us</h1>
            <p className='py-4 sm:pr-[90px] text-[14px]'>Travel Made Easy" reflects our commitment to providing effortless transportation solutions. With simple booking, reliable service, and professional drivers, TransitXpert ensures you enjoy a smooth, stress-free journey every time.</p>
            <Link className='py-2 px-4 rounded  bg-gradient-to-r from-sky-500 to-fuchsia-500' href="/">Learn More</Link>
          </div>
          <div className='myimg h-full flex flex-col justify-center md:w-[2200px] '>
            <img className=' h-[600px]' src="/aboutimg.png" alt="" />
          </div>
        </div>
      </header>
      <footer className=" bg-zinc-200 mt-40">
     
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto">
          <p className="text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} Tansit<span className='text-yellow-600'>Xpert</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Page;
