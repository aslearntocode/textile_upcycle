'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-green-800 text-white">
      {/* Mobile view */}
      <div className="lg:hidden flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={32} 
            height={32}
            className="h-8 w-auto"
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">
          Log In
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-green-800 w-full`}>
        <div className="p-4 space-y-3">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/b2b" className="block">B2B</Link>
          <Link href="/b2c" className="block">B2C</Link>
          <Link href="/contact" className="block">Contact</Link>
          <Link href="/resources" className="block">Resources</Link>
          <Link href="/careers" className="block">Careers</Link>
        </div>
      </div>

      {/* Desktop menu - unchanged */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-16">
            {/* Logo and Navigation Links - Left Side */}
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <Link href="/">
                  <img src="/Logo.png" alt="Logo" className="h-14 w-14" />
                </Link>
              </div>
              
              {/* Navigation Links */}
              <div className="flex space-x-6">
                <Link href="/" className="text-white hover:text-yellow-400 px-3 py-2">
                  Home
                </Link>
                <Link href="/about" className="text-white hover:text-yellow-400 px-3 py-2">
                  About Us
                </Link>
                <Link href="/b2b" className="text-white hover:text-yellow-400 px-3 py-2">
                  B2B Products
                </Link>
                <Link href="/b2c" className="text-white hover:text-yellow-400 px-3 py-2">
                  B2C Products
                </Link>
                <Link href="/technology" className="text-white hover:text-yellow-400 px-3 py-2">
                  Technology
                </Link>
                <Link href="/awards" className="text-white hover:text-yellow-400 px-3 py-2">
                  Awards
                </Link>
              </div>
            </div>

            {/* Login Button - Right Side */}
            <div className="ml-auto">
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-500">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 