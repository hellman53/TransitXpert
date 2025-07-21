'use client'
import React from 'react'
import { UserButton } from "@clerk/nextjs";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { SignInButton, useUser } from '@clerk/nextjs';

function NavBar() {
  const router = useRouter();
  const { isSignedIn } = useUser();
  
  return (
    <div className='flex justify-between p-3 px-10 border-b-[4px] shadow-lg'>
      <div className='flex gap-10 items-center'>
     
        <a href="#"><img src="/logo.png" alt="logo" width={120} height={60} onClick={()=>router.push('/home')}/></a>

        <div className='hidden md:flex gap-6'>
          <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all text-[18px]' onClick={()=>router.push("/home")}>Home</h2>
          <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all text-[18px]'>Outstation</h2>
          <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all text-[18px]' onClick={()=>router.push("/about-us")}>About</h2>
        </div>
      </div>

      
      <div className='flex items-center gap-4'>
       
        <button
          onClick={() => router.push("/")}
          className="bg-gray-700 text-white hover:bg-gray-900 text-sm font-semibold px-4 py-2"
        >
          Book<span className="text-blue-400"> Ride</span>
        </button>

{!isSignedIn ? (
        <SignInButton mode="modal">
          <button className='bg-gray-700 text-white hover:bg-gray-900 text-sm font-semibold px-4 py-2'>Login</button>
        </SignInButton>
      ) : (
        <UserButton afterSignOutUrl="/" />
      )}
      </div>
    </div>
  )
}

export default NavBar;
