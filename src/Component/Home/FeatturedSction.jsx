import React, { useEffect, useState } from 'react';
import RoommateCard from './RoommateCard';
import { Bounce} from "react-awesome-reveal";

import { Link } from 'react-router';
import SkeletonCard from '../Skeleton/SkeletonCard';

const FeatturedSction = () => {
    const [aldata,setAlData]=useState([])
    const[loding,setLoding]=useState(true)
        useEffect(()=>{
            fetch('https://find-my-roommate-server.vercel.app/roommates/available')
            .then(res=>res.json())
            .then(data=>{
                setAlData(data)
                setLoding(false)
            })
        },[])
    return (
        <>
     <div className='mt-7 bg-gray-50 pb-5 '>
            <Bounce >
                 <h1 className='text-[2.4rem] font-bold text-center'>Find Your New Roommate</h1>
            </Bounce>
           
            <p className='text-xl text-center'>Some amazing people are looking for a roommate like you.</p>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-15 mb-6 px-3">
                
               {loding
          ? Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)
          : aldata?.map(d => <RoommateCard key={d._id} d={d} />)
        }
               
            </div>
            {!loding && (
        <div className="flex justify-center items-center mt-6">
          <Link to='/das/browseListing' className='btn text-white bg-blue-400 w-32'>See All</Link>
        </div>
      )}
        </div>
        </>
       
    );
};

export default FeatturedSction;