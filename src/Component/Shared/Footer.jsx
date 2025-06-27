import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-7 bg-gradient-to-r from-white via-gray-50 to-stone-100
 text-gray-900 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: contact@findmyroom.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Room Street, Apt City</p>
        </div>

        {/* Terms & Conditions */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Terms & Conditions</h3>
          <p className="text-sm text-gray-900">
            By using FindMyRoom, you agree to our terms of service. Listings are
            for informational purposes only. We are not responsible for rental
            disputes. Use of this site means you accept these terms.
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <Link to='https://www.facebook.com/share/16V9q1oPC7/' target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-500" />
            </Link>
            <Link to='https://www.instagram.com/shakibnasib?igsh=MW0xMm9jZXV0ajZ6aQ==' target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </Link>
            <Link to='https://github.com/sakibnasib' target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-400" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-900">
        &copy; {new Date().getFullYear()} FindMyRoom. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
