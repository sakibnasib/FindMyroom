import React, { useEffect, useState } from 'react';
import RoommateCard from './RoommateCard';
import { Bounce} from "react-awesome-reveal";
const FeatturedSction = () => {
    const [aldata,setAlData]=useState([])
    
        useEffect(()=>{
            fetch('https://find-my-roommate-server.vercel.app/roommates/available')
            .then(res=>res.json())
            .then(data=>{
           
                setAlData(data)
                console.log(data)
            })
        },[])
    return (
        <div className='mt-5'>
            <Bounce >
                 <h1 className='text-[3rem] font-bold text-center'>Find Your New Roommate</h1>
            </Bounce>
           
            <p className='text-xl text-center'>Some amazing people are looking for a roommate like you.</p>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 mt-15 mb-6 px-3">
                {
                aldata?.map(d=>(<RoommateCard key={d._id} d={d}></RoommateCard>))
            }
            </div>
        </div>
    );
};

export default FeatturedSction;