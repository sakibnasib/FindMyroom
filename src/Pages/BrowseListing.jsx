import React, { useEffect, useState } from 'react';
import BroTableHade from '../Component/BroTableHade';
import img from '../assets/images (1).png'
const BrowseListing = () => {
    const [aldata,setAlData]=useState([])

    useEffect(()=>{
        fetch('https://find-my-roommate-server.vercel.app/roommates')
        .then(res=>res.json())
        .then(data=>{
            setAlData(data)
        })
    },[])

    return (
        <div className=" p-2 mx-auto sm:p-4 text-gray-800 ">
			<div className="flex justify-center items-center">
				<img src={img} className='w-[70px] h-[60px]' alt="" />
				<h2 className="mb-4 text-2xl font-semibold leading-tight">BrowseListing Of Roommates</h2>
			</div>
	
	<div className="overflow-scroll md:overflow-auto md:w-10/12 mx-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-15" />
			</colgroup>
			<thead className="bg-violet-200">
				<tr className="text-left">
					<th className="p-3">Seireal</th>
					<th className="p-3">Name</th>
					<th className="p-3">Location</th>
					<th className="p-3">Rent Amount</th>
					<th className="p-3 text-right">Available</th>
					<th className="p-3">Button</th>
				</tr>
			</thead>
            {aldata?.map((data,index) => (
  <BroTableHade key={data._id} data={data} index={index} />
))}
            </table>
            </div>
            </div>
    );
};

export default BrowseListing;