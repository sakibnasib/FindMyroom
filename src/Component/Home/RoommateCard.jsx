import React from 'react';
import { FaUser, FaHome, FaCalendarAlt, FaDollarSign, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const RoommateCard = ({d}) => {
    return (
 <div className='flex flex-col gap-2 w-full col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl'>
      <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
        <img
          className='object-cover h-full w-full group-hover:scale-110 transition'
          src={d.imageUrl}
          alt='Room Image'
        />
        <div className='absolute top-3 right-3'></div>
      </div>
      <div className='font-semibold text-lg flex items-center gap-2'>
        <FaUser className='text-gray-600' />
        Owner Name: {d.name}
      </div>
      <div className='font-semibold text-lg flex items-center gap-2'>
        <FaHome className='text-gray-600' />
        Room Type: {d.roomType}
      </div>
      <div className='font-semibold text-lg flex items-center gap-2'>
        <FaCalendarAlt className='text-gray-600' />
        Availability: {d.availability}
      </div>
      <div className='flex flex-row items-center gap-2 font-semibold text-lg'>
        <FaDollarSign className='text-gray-600' />
        Price: {d.amount}$
      </div>
      <Link to={`/das/roommateDetails/${d._id}`} className='flex items-center gap-1 btn hover:underline'>
        <FaInfoCircle />
        See More...
      </Link>
    </div>
    );
};

export default RoommateCard;

