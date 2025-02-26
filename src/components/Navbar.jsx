import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoimg from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50">
      {/* Top Info Bar */}
      {/* <div className="bg-green-600 text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📧 info@example.com</span>
            <span>📞 +1234567890</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-green-200">Follow Us</a>
            <a href="#" className="hover:text-green-200">Get Quote</a>
          </div>
        </div>
      </div> */}

      {/* Main Navbar */}
      <div className="bg-white">
        <div className="container mx-auto px-2 md:px-20 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="w-48">
              <img src={logoimg} alt='logo' className='w-full' />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden text-lg lg:flex space-x-8">
              <li><Link to="/" className="text-[#22201E] hover:text-[#E31F25]">Home</Link></li>
              <li><Link to="/about" className="text-[#22201E] hover:text-[#E31F25]">About</Link></li>

              <li><Link to="/services" className="text-[#22201E] hover:text-[#E31F25]">Our Service</Link></li>
              <li><Link to="/industries" className="text-[#22201E] hover:text-[#E31F25]">Industries We Serve</Link></li>

              <li><Link to="/customization" className="text-[#22201E] hover:text-[#E31F25]">Customization</Link></li>

              <li><Link to="/contact" className="text-[#22201E] hover:text-[#E31F25]">Contact</Link></li>
            </ul>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#22201E]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden mt-4`}>
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={handleLinkClick} className="text-[#22201E] hover:text-[#E31F25] py-2">Home</Link>
              <Link to="/about" onClick={handleLinkClick} className="text-[#22201E] hover:text-[#E31F25] py-2">About</Link>
              <Link to="/services" onClick={handleLinkClick} className="text-[#22201E] hover:text-[#E31F25] py-2">Our Service</Link>
              <Link to="/industries" onClick={handleLinkClick} className="text-[#22201E] hover:text-[#E31F25] py-2">Industries We Serve</Link>
              <Link to="/customization" onClick={handleLinkClick} className="text-[#22201E] hover:text-[#E31F25] py-2">Customization</Link>
              <Link to="/contact" onClick={handleLinkClick} className="text-[#22201E] hover:text-[#E31F25] py-2">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
