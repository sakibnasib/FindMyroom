// import React from 'react';
// import { FaLocationDot, FaBed, FaDollarSign } from "react-icons/fa6";
// import { MdOutlinePermIdentity } from "react-icons/md";
// import { Link } from 'react-router';

// const RoommateCard = ({d}) => {
//     return (
//         <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <div className="mb-4">
//                 <div className="flex items-center gap-2 mb-2">
//                     <MdOutlinePermIdentity className="text-violet-600" size={24}/>
//                     <h3 className="text-xl font-semibold text-gray-800">{d.name}</h3>
//                 </div>
//                 <p className="text-gray-600 ml-8">{d.title}</p>
//             </div>

//             <div className="space-y-3 mb-6">
//                 <div className="flex items-center gap-2">
//                     <FaLocationDot className="text-violet-600" size={20}/>
//                     <span className="text-gray-700">{d.location}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <FaBed className="text-violet-600" size={20}/>
//                     <span className="text-gray-700">{d.roomType}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <FaDollarSign className="text-violet-600" size={20}/>
//                     <span className="text-gray-700">${d.amount}/month</span>
//                 </div>
//             </div>
//             <div className="mb-4">
//                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                     d.availability === 'available' 
//                     ? 'bg-green-100 text-green-800' 
//                     : 'bg-red-100 text-red-800'
//                 }`}>
//                     {d.availability}
//                 </span>
//             </div>
//             <Link to={`/roommateDetails/${d._id}`}>
//                 <button className="w-full py-2 px-4 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors duration-300">
//                     See More
//                 </button>
//             </Link>
//         </div>
//     );
// };

// export default RoommateCard;

import React from 'react';
import { FaLocationDot, FaBed, FaDollarSign } from "react-icons/fa6";
import { MdOutlinePermIdentity } from "react-icons/md";
import { Link } from 'react-router';

const RoommateCard = ({d}) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Header with Name and Title */}
            <div className="">
                 <div className="flex items-center gap-2 mb-2">
                    <MdOutlinePermIdentity className="text-violet-600" size={24}/>
                    <h3 className="text-xl font-semibold text-gray-800">{d.name}</h3>
                </div>
                <p className="text-gray-600 ml-8">{d.title}</p>
            </div>

            {/* Key Information */}
            <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                    <FaLocationDot className="text-violet-600" size={20}/>
                    <span className="text-gray-700">{d.location}</span>
                </div>
               </div>
               <div className=" space-y-2">
                 <div className="flex items-center gap-2">
                    <FaBed className="text-violet-600" size={20}/>
                    <span className="text-gray-700">{d.roomType}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaDollarSign className="text-violet-600" size={20}/>
                    <span className="text-gray-700">${d.amount}/month</span>
                </div>
            </div>
            <div className="mb-4 mt-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    d.availability === 'available' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                    {d.availability}
                </span>
            </div>

            {/* See More Button */}
            <Link to={`/roommateDetails/${d._id}`}>
                <button className="w-full py-2 px-4 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors duration-300">
                    See More
                </button>
            </Link>
        </div>
    );
};

export default RoommateCard;