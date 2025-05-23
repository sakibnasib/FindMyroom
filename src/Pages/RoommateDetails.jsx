
import React, { use, useState } from 'react';
import {  useLoaderData } from 'react-router';
import { MdTitle, MdLocationOn, MdEmail, MdPhone, MdPerson } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaBed, FaDollarSign } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import img from '../assets/images (1).png'
import { AuthContex } from '../Provider/AuthProvider';

const RoommateDetails = () => {
    const {user}=use(AuthContex)
    const data = useLoaderData();
   const [number,setNumber]=useState(false);
   const [likeCount, setLikeCount] = useState(data.likeCount || 0);
   const handleLike=(_id)=>{
    fetch(`https://find-my-roommate-server.vercel.app/roommates/${_id}/likes`,{
        method:"PATCH",
        headers:{
            "content-type": "application/json",
        },
        body:JSON.stringify({incrementBy: 1})
    })
    .then(res =>res.json())
    .then(data=>{
        if(data.modifiedCount){
            setNumber(true)
            setLikeCount(prev => prev + 1)
        }
    })

   };
   console.log(data.email,user.email )
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-gradient-to-r from-violet-100 via-purple-100 to-pink-100
 rounded-lg shadow-2xl p-6">
                {/* Header Section */}
                <div className="flex justify-center items-center">
                    <img src={img} className='w-[70px] h-[60px] rounded-3xl' alt="" />
                   <h1 className='text-[1.5rem] font-bold text-violet-600'>RoommateDetails</h1>
                </div>
                <div className="flex justify-end ">
                    <span className='btn rounded-3xl'><SlLike color='blue' size={25}></SlLike> {likeCount}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
                    </div>
                
                </div>

                {/* Main Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <MdLocationOn className="text-violet-600" size={20} />
                            <span className="text-gray-700">{data.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaBed className="text-violet-600" size={20} />
                            <span className="text-gray-700">Room Type: {data.roomType}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaDollarSign className="text-violet-600" size={20} />
                            <span className="text-gray-700">Rent: ${data.amount}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail className="text-violet-600" size={20} />
                            <span className="text-gray-700">{data.email}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <BsFillPersonLinesFill className="text-violet-600" size={20} />
                            <span className="text-gray-700">Lifestyle: {data.lifestyle}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdPerson className="text-violet-600" size={20} />
                            <span className="text-gray-700">Status: {data.availability}</span>
                        </div>
                          <div className="flex items-center gap-2">
                            <MdTitle className="text-violet-600" size={20} />
                            <span className="text-gray-700">Title: {data.title}</span>
                        </div>

                        {
                            number && <>
                             <div className="flex items-center gap-2">
                            <MdPhone className="text-violet-600" size={20} />
                            <span className="text-gray-700">{data.contact}</span>
                        </div> 
                            </>
                        }
                           
                    </div>
                </div>

                {/* Description Section */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
                    <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
                        {data.description}
                    </p>
                </div>
               <button
  className={`btn w-full bg-violet-800 mt-3 text-white rounded-2xl ${
    data.email == user.email ? ' opacity-50' : ''
  }`}
  onClick={() => handleLike(data._id)}
  disabled={data.email == user.email}
>
  Like
</button>
            </div>
        </div>
    );
};

export default RoommateDetails;