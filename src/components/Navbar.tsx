"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icon library (lucide-react)
import { SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignUpButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user,isSignedIn,isLoaded,}=useUser();
  const role=user?.publicMetadata?.role;
  // console.log(role)

  return (
    <nav className="bg-white shadow-md sticky ">
      <div className="container max-w-7xl  mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyLogo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {
            isSignedIn ? (isSignedIn?(
                <>
                {role==='user' && (<Link href='/user-dashboard/'>User Dashboard </Link>)}
                {role==='admin' && (<Link href='/admin-dashboard/'>Admin Dashboard </Link>)}
                {role==='manager' && (<Link href='/manager-dashboard/'>Manager Dashboard </Link>)}
                </>
            ):<p>Hello</p>):<p>login</p>
          }
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          
            {/* <SignInButton mode="modal" /> */}
            <SignedIn>
             <div className="flex justify-center items-center gap-2">
                <UserButton  />
               <Link href={'/user-profile'} className=" text-black  cursor-pointer">
                  Profile
                </Link>
             </div>
            </SignedIn>
           
         
         
            <SignedOut>
               <SignInButton mode="modal">
                  <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Login
                </button>
               </SignInButton>
               
              
              {/* <SignUpButton mode="modal">
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton> */}
            </SignedOut>
         
          
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col space-y-2 px-4 py-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <hr className="my-2" />
            <Link
              href="/login"
              className="px-4 py-2 border rounded-lg text-center text-blue-600 border-blue-600 hover:bg-blue-50 transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
