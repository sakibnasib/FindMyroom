import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyListTbody = ({data,index,setNewData,newData}) => {
    const handleDelete = (_id) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert RoommateData!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://find-my-roommate-server.vercel.app/roommates/${_id}`, {
                        method: "DELETE",
                    }).then((res) => res.json())
                        .then((data) => {
                            if (data.deletedCount) {
                                const reaming=newData.filter(da=>da._id !==_id)
                                setNewData(reaming)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Roommate data deleted.",
                                    icon: "success"
                                });
                            }
                        })
                }
            });
        };
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
					<td className="p-3 text-right flex gap-3 ">
                        <Link  to={`/upDateRoommateInfo/${data._id}`}>
                        <button className="px-3 py-1 font-semibold rounded-md bg-violet-600 text-gray-50">
							Edite
						</button>
                        </Link>
						
                        {/*  */}
                        <button onClick={()=>handleDelete(data._id)} className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50">
							Delete
						</button>
					</td>
				</tr> 
        </tbody>
    );
};

export default MyListTbody;