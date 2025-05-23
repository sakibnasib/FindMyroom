import React, { useEffect, useState } from 'react';
import BroTableHade from '../Component/BroTableHade';
import img from '../assets/images (1).png'
import Loding from '../Component/Loding'
const BrowseListing = () => {
    const [aldata,setAlData]=useState([])
	const[loding,setLoding]=useState(true)

    useEffect(()=>{
        fetch('https://find-my-roommate-server.vercel.app/roommates')
        .then(res=>res.json())
        .then(data=>{
            setAlData(data)
			setLoding(false)
        })
    },[])

    return (
		<>
		{
			loding? <div><Loding></Loding></div> : (
				  <div className=" p-2 mx-auto sm:p-4 text-gray-800 mb-10 ">
			<div className="flex justify-center items-center mb-5">
				<img src={img} className='w-[70px] h-[60px] rounded-3xl' alt="" />
				<h2 className=" ml-2 text-2xl font-semibold text-violet-600">BrowseListing Of Roommates</h2>
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
					<th className="p-3"></th>
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
			)
		}
		</>
      
    );
};

export default BrowseListing;