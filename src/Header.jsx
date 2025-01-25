import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-50 py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo and Address Section */}
        <div className="flex items-center space-x-4 w-full lg:w-auto mb-4 lg:mb-0">
          <img 
            src="https://notioninsurance.com/images/broker-logo.png" 
            alt="Logo" 
            className="h-12" 
          />
          <div className="text-sm text-blue-600 hidden sm:block">
            <p>Plot No.1, 3rd Floor Lalwani Complex</p>
            <p>Above Axis Bank, Vidya Nagar, Bhopal, Madhya Pradesh 462026</p>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="w-full lg:w-auto flex flex-wrap justify-between items-center space-y-2 lg:space-y-0 lg:space-x-6 text-sm">
          <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
          <a href="/" className="text-blue-600 hover:text-blue-800">About Us</a>
          <a href="/" className="text-blue-600 hover:text-blue-800">Make a Claim</a>
          <a href="/" className="text-blue-600 hover:text-blue-800">Contact Us</a>
        </nav>

        {/* Buttons Section */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end space-x-4 mt-4 lg:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">
            Login
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto">
            Become a Posp
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
