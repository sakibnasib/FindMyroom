import React from 'react';
import { Link } from 'react-router';

const About = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">About RoomMate Connect</h1>

      <p  className="text-lg text-gray-700 mb-6">
        Welcome to <span className="font-semibold">RoomMate Connect</span> — your go-to platform for finding the perfect roommate or sharing your space with others. Whether you're moving to a new city, switching apartments, or simply looking to cut down on living costs, we make the roommate-finding process easy, secure, and hassle-free.
      </p>

      <div  className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to connect people with compatible roommates by providing a seamless, user-friendly experience that prioritizes safety, lifestyle compatibility, and ease of communication.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Easy roommate listing and browsing features</li>
            <li>Secure user authentication with email or Google login</li>
            <li>Detailed lifestyle preferences to find your ideal match</li>
            <li>Protected routes to ensure data privacy and security</li>
            <li>Like and interest tracking on each post</li>
          </ul>
        </div>
      </div>

      <div  className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
        <p className="text-gray-700">
          We understand how challenging it can be to find the right person to live with. That's why we’ve created a platform that puts your needs first — with verified listings, personalized roommate matches, and easy tools to post, update, and manage your listings.
        </p>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get Started Today!</h2>
        <p className="text-gray-700 mb-4">
          Whether you're looking for a room or listing one, RoomMate Connect is here to help. Join our community today and take the next step toward finding your ideal roommate.
        </p>
        <Link data-aos="fade-up-right"
          to='/register'
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Create an Account
        </Link>
      </div>
    </div>
        </div>
    );
};

export default About;