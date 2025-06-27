import React from 'react';
import { Link } from 'react-router';

const BroTableHade = ({data}) => {
    return (
        <tbody  className='bg-gray-700'>
           <tr className="border-b border-opacity-20 border-b-fuchsia-400 bg-gray-50">
					<td className="">
					</td>
					<td >
						<div className="mask  h-16 w-16">
                <img
				className='w-full rounded-full'
                  src={data?.imageUrl}
                  alt="Avatar Tailwind CSS Component" />
				  
              </div>
					</td>
					<td className="p-3">
						<p>{data.name}</p>
					</td>
					<td className="p-3">
						<p>{data.location}</p>
					</td>
					<td className="p-3">
						<p>{data.amount}</p>
					</td>
					<td className="p-3 text-right ">
						<p className=''>{data.availability}</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-violet-600 text-gray-50">
							<Link to={`/das/roommateDetails/${data._id}`}>SeeMore</Link>
						</span>
					</td>
				</tr> 
        </tbody>
    );
};

export default BroTableHade;