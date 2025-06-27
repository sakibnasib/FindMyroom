
import React, { useEffect, useState, useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { AuthContex } from '../../Provider/AuthProvider';
import { motion, animate } from 'framer-motion';

const DasHome = () => {
  const { user } = useContext(AuthContex);
  const [roommateCount, setRoommateCount] = useState(0);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    fetch('https://find-my-roommate-server.vercel.app/roommates')
      .then(res => res.json())
      .then(data => {
        setRoommateCount(data.length);

        const grouped = data.reduce((acc, curr) => {
          const loc = curr.location || 'Unknown';
          acc[loc] = (acc[loc] || 0) + 1;
          return acc;
        }, {});

        const chartData = Object.entries(grouped).map(([location, count]) => ({
          location,
          count
        }));

        setLocationData(chartData);
      });
  }, []);

  // Animate number on change
  useEffect(() => {
    const controls = animate(animatedCount, roommateCount, {
      duration: 1,
      onUpdate(value) {
        setAnimatedCount(Math.floor(value));
      }
    });

    return () => controls.stop();
  }, [roommateCount,animatedCount]);

  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-violet-600 mb-8">📊 Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Total Listings Box */}
        <motion.div
          className="bg-gradient-to-r from-violet-100 to-violet-200 p-6 rounded-2xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-lg font-semibold mb-2">Total Listings</h2>
          <p className="text-4xl font-extrabold text-violet-700">{animatedCount}</p>
        </motion.div>

        {/* User Info Box */}
        <motion.div
          className="bg-gradient-to-r from-sky-100 to-sky-200 p-6 rounded-2xl shadow-md flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-14 h-14 rounded-full border-2 border-white shadow"
          />
          <div>
            <h2 className="text-lg font-semibold">{user?.displayName || 'Anonymous'}</h2>
            <p className="text-sm text-gray-600 p-1">{user?.email}</p>
          </div>
        </motion.div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-700">📍 Listings by Location</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={locationData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="location" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#7c3aed" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DasHome;
