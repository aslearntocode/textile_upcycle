'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Login from './Login'
import { auth } from '@/app/firebase/config'
import { signOut, User } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      router.push('/')
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  const UserMenu = () => (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 bg-green-700 px-4 py-2 rounded hover:bg-green-600"
      >
        <span>{user?.email?.split('@')[0]}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showDropdown ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
        </svg>
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50">
          <div className="py-1">
            <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Edit Profile
            </Link>
            <Link href="/cart" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Cart
            </Link>
            <button
              onClick={handleSignOut}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )

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
        {user ? (
          <UserMenu />
        ) : (
          <button 
            onClick={() => setShowLogin(true)}
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
          >
            Log In
          </button>
        )}
      </div>

      {/* Desktop view */}
      <div className="hidden lg:flex justify-between items-center p-4">
        <div className="flex items-center gap-8">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={32} 
            height={32}
            className="h-8 w-auto"
          />
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/about" className="hover:text-yellow-400">About</Link>
          <Link href="/b2b" className="hover:text-yellow-400">B2B</Link>
          <Link href="/b2c" className="hover:text-yellow-400">B2C</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
          <Link href="/resources" className="hover:text-yellow-400">Resources</Link>
          <Link href="/careers" className="hover:text-yellow-400">Careers</Link>
        </div>
        {user ? (
          <UserMenu />
        ) : (
          <button 
            onClick={() => setShowLogin(true)}
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
          >
            Log In
          </button>
        )}
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

      {/* Login Modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </nav>
  )
} 