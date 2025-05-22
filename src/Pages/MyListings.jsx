import React, { use, useEffect, useState } from 'react';
import { AuthContex } from '../Provider/AuthProvider';
import MyListTbody from '../Component/MyListTbody';
import img from '../assets/images (1).png'
const MyListings = () => {
    const {user}=use(AuthContex)
	const[newData,setNewData]=useState([])
	console.log(newData)
	useEffect(()=>{
		 if(user?.email){
			fetch(`https://find-my-roommate-server.vercel.app/roommates/email/${user.email}`)
      .then(res=>res.json())
	  .then(data=>{
		setNewData(data)
	  })
		 }
	},[user])
// hadleDelete 
    
    return (
         <div className=" p-2 mx-auto sm:p-4 text-gray-800 mb-10">
	<div className="flex justify-center items-center mb-5">
		<img src={img} className='w-[80px] h-[60px] rounded-3xl' alt="" />
		<h2 className=" ml-2 text-2xl font-semibold text-violet-600">My Add Roommates List</h2>
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
            {newData?.map((data,index) => (
  <MyListTbody key={data._id} newData={newData} setNewData={setNewData} data={data} index={index} />
))}
            </table>
            </div>
            </div>
    );
};

export default MyListings;