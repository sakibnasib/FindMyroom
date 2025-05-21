import React, { useEffect, useState } from 'react';
import BroTableHade from '../Component/BroTableHade';

const BrowseListing = () => {
    const [aldata,setAlData]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/roommates')
        .then(res=>res.json())
        .then(data=>{
            setAlData(data)
        })
    },[])

    return (
        <div className=" p-2 mx-auto sm:p-4 text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Roommates</h2>
	<div className="overflow-scroll md:overflow-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-15" />
			</colgroup>
			<thead className="bg-orange-100">
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