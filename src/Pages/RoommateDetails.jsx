// import React from 'react';
// import { Link, useLoaderData } from 'react-router';
// import { MdDelete } from "react-icons/md";
// import { CiEdit } from "react-icons/ci";
// import Swal from 'sweetalert2';
// const RoommateDetails = () => {
//     const data=useLoaderData();
//     const handleDelete = (_id) => {
//     console.log(_id)
//     Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!"
// }).then((result) => {
//   if (result.isConfirmed) {
// fetch(`http://localhost:3000/roommates/682c5712651c5cfe5583b577`,{
//     method:"DELETE",
// }).then((res) => res.json())
// .then((data)=>{
//     if(data.deletedCount){
// Swal.fire({
//       title: "Deleted!",
//       text: "Your file has been deleted.",
//       icon: "success"
//     });
//     }
// })
//   }
// });
//   };
//     console.log(data)
//     return (
//         <div>
//             <h1>{data.name}</h1>

//    <button onClick={()=>handleDelete(data._id)}><MdDelete/></button>
//    <Link to={`/upDateRoommateInfo/${data._id}`}><button><CiEdit size={35}/></button></Link>
//         </div>
//     );
// };

// export default RoommateDetails;


import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { MdDelete, MdLocationOn, MdEmail, MdPhone, MdPerson } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaBed, FaDollarSign } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Swal from 'sweetalert2';

const RoommateDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate(); 
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/roommates/${_id}`, {
                    method: "DELETE",
                }).then((res) => res.json())
                    .then((data) => {
navigate('/')
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
                    </div>
                    <div className="flex gap-3">
                        <button 
                            onClick={() => handleDelete(data._id)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors"
                        >
                            <MdDelete size={24} />
                        </button>
                        <Link to={`/upDateRoommateInfo/${data._id}`}>
                            <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors">
                                <CiEdit size={24} />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Main Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <MdLocationOn className="text-violet-600" size={20} />
                            <span className="text-gray-700">{data.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaBed className="text-violet-600" size={20} />
                            <span className="text-gray-700">Room Type: {data.roomType}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaDollarSign className="text-violet-600" size={20} />
                            <span className="text-gray-700">Rent: ${data.amount}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail className="text-violet-600" size={20} />
                            <span className="text-gray-700">{data.email}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <BsFillPersonLinesFill className="text-violet-600" size={20} />
                            <span className="text-gray-700">Lifestyle: {data.lifestyle}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdPerson className="text-violet-600" size={20} />
                            <span className="text-gray-700">Status: {data.availability}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdPhone className="text-violet-600" size={20} />
                            <span className="text-gray-700">{data.contact}</span>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
                    <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RoommateDetails;