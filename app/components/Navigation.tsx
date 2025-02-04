import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo and Navigation Links - Left Side */}
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Link href="/">
                <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
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
    </nav>
  );
} 