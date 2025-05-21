import React from 'react';
import { Link } from 'react-router';

const BroTableHade = ({data,index}) => {
    return (
        <tbody className='bg-gray-700'>
           <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
					<td className="p-3">
						<p>{index +1}</p>
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
							<Link to={`/roommateDetails/${data._id}`}>SeeMore</Link>
						</span>
					</td>
				</tr> 
        </tbody>
    );
};

export default BroTableHade;