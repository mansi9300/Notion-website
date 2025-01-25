import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-100 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img
            src="logo.png"
            alt="Notion Insurance Broker"
            className="w-20 mb-4"
          />
          <p>
            Notion Insurance Broker Pvt. Ltd. delivers customized insurance
            solutions designed to meet the diverse needs of businesses and
            individuals.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Licence</h3>
          <p>Licence No.</p>
          <p>IRDA Direct Broker Code:</p>
          <p>Valid till:</p>
          <p>CIN:</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Partners</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Legal and Admin Policies</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQ's</li>
            <li>Career</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-500 text-white text-center py-4 mt-10">
        <p>© 2024 Notion Insurance Broker. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
