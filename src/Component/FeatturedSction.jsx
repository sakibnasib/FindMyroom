import React, { useEffect, useState } from 'react';
import RoommateCard from './RoommateCard';

const FeatturedSction = () => {
    const [aldata,setAlData]=useState([])
    
        useEffect(()=>{
            fetch('http://localhost:3000/roommates')
            .then(res=>res.json())
            .then(data=>{
                const newData=data.filter(single=>single.availability==="available")
             const sixData =(newData.slice(0, 6)) 
                setAlData(sixData)
            })
        },[])
    return (
        <div className='mt-5'>
            <h1 className='text-[3rem] font-bold text-center'>Find Your New Roommate</h1>
            <p className='text-xl text-center'>Some amazing people are looking for a roommate like you.</p>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 mt-15 mb-6 px-3">
                {
                aldata.map(d=>(<RoommateCard key={d._id} d={d}></RoommateCard>))
            }
            </div>
        </div>
    );
};

export default FeatturedSction;