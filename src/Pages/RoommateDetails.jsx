
import React, { use, useState } from 'react';
import {  useLoaderData } from 'react-router';
import { AuthContex } from '../Provider/AuthProvider';
import { FcLike } from "react-icons/fc";

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
   
   console.log(number,likeCount )
    return (


 <div className='mx-auto mt-5 flex flex-col lg:flex-row justify-between w-full gap-12'>
        {/* Header */}
        <div className='flex flex-col gap-6 flex-1'>
          <div>
            <div className='w-full overflow-hidden rounded-xl'>
              <img
                className='object-cover w-full'
                src={data.imageUrl}
                alt='header image'
              />
            </div>
          </div>
        </div>
        <div className='md:gap-10 flex-1'>
          {/* Plant Info */}

          <div  className='
          text-lg font-light text-neutral-500'>
RoomType:{data.roomType}
          </div>
         
{/*  */}
<hr className='my-6' />
<div className=" text-lg font-light text-neutral-500">
    {data.lifestyle}
</div>
<hr className='my-6' />
<div className=" text-lg font-light text-neutral-500">
   Title : {data.title}
</div>
<hr className='my-6' />
<div className=" text-lg font-light text-neutral-500">
   Availability: {data.availability}
</div>
          <hr className='my-6' />
          <div
            className='
          text-lg font-light text-neutral-500'
          >
           {data.description}
          </div>
          <hr className='my-6' />

          <div
            className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
          >
            <div>OwnerNmae: {data.name}</div>

            <img
              className='rounded-full'
              height='30'
              width='30'
              alt='Avatar'
              referrerPolicy='no-referrer'
              src={user?.photoURL}
            />
          </div>
          <hr className='my-6' />
          <div>
            <p
              className='
                gap-4 
                font-light
                text-neutral-500
              '
            >
             
contact: {data.contact}
            </p>
          </div>
          <hr className='my-6' />
          <div className='flex justify-between'>
            <p className='font-bold text-2xl text-gray-500'>Rent: {data.amount}$</p>
            <div>
            </div>
          </div>
          <div className="">
            <hr className='my-6' />
             <p className='font-bold text-2xl text-gray-500'>OwnerEmail: {data.email}</p>
          </div>
          <hr className='my-6' />
<div className=" flex justify-around items-center">
<button
  className={`btn   text-white rounded-2xl ${
    data.email == user.email ? ' opacity-50' : ''
  }`}
  onClick={() => handleLike(data._id)}
  disabled={data.email == user.email}
>
  <p className='flex text-xl font-bold text-black'> <FcLike size={30}/>:{likeCount}</p>
 {/* <FcLike size={30} /> */}
</button>

</div>
        </div>
      </div>

    );
};

export default RoommateDetails;