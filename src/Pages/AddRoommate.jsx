import React, { use } from 'react';
import { AuthContex } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddRoommate = () => {
   
  const{user}=use(AuthContex)
  const handleAddDb=e=>{
      e.preventDefault();
        const form=e.target 
        if (!form.checkValidity()) {
    Swal.fire({
       position: "top-center",
      icon: 'error',
      title: 'All fields are required!',
      text: 'Please fill out all fields before submitting.',
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }
         const formData = new FormData(form);
    const roommate = Object.fromEntries(formData.entries());
    const roomateData={
      likeCount:0,
      ...roommate
    }
// addDb 
 fetch('https://find-my-roommate-server.vercel.app/roommates',{
  method:"POST",
  headers:{
    "content-type": "application/json",
  },
body:JSON.stringify(roomateData)
 })
 .then((res)=>res.json())
 .then((data)=>{
 if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "AddRoommate data successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset()
        }
 })
  }
  return (
    <div className=" flex justify-center items-center mt-5 mb-5 w-10/12 mx-auto">
            <div className="w-full  p-8 space-y-3 rounded-xl 
  bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100
 text-gray-800">
	<h1 className="text-2xl font-bold text-center">Add to Find Roommate</h1>
	<form onSubmit={handleAddDb} className="space-y-6">
  <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
    {/* title */}
    <div className="space-y-1 text-sm">
			<label  className="block text-gray-600 font-semibold">Title</label>
			<input type="text" required  name="title" placeholder="Title" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
		</div>
  
    {/*Location  */}
     <div className="space-y-1 text-sm">
			<label  className="block text-gray-600 font-semibold">Location</label>
			<input type="text"  required name="location" placeholder="Location" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
		</div>
    {/* Rent Amount */}
    <div className="space-y-1 text-sm">
			<label  className="block text-gray-600 font-semibold">Rent Amount</label>
			<input type="text"  required  name="amount" placeholder="Rent Amount" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
		</div>
    {/* Room Type */}
    <div className="space-y-1 text-sm">
       <label className="block  text-gray-600 font-semibold">
        Room Type:
        <select
          name="roomType"
          required
          className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600 "
        >
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
        </select>
      </label> 
		</div>
    {/* Lifestyle Preferences */}
     <div className="space-y-1 text-sm">
			<label className="block text-gray-600 font-semibold">Lifestyle Preferences</label>
			<input type="text"  required  name="lifestyle" placeholder="Pets, Smoking, Night Owl, etc." className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
		</div>
    {/* Description*/}
    <div className="space-y-1 text-sm">
			<label  className="block text-gray-600 font-semibold">Description</label>
			<input type="text"  required  name="description" placeholder="description" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
		</div>
{/* Contact Info */}
<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-600 font-semibold">Contact Info</label>
			<input type="text"  required  name="contact" placeholder="Phone number" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
		</div>
    {/* Availability  */}
    <div className="space-y-1 text-sm">
		<label className="block mb-2 text-gray-600 font-semibold">
        Availability:
        <select
          name="availability" 
          className="w-full border p-2 rounded border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
        >
          <option value="available">Available</option>
          <option value="not available">Not Available</option>
        </select>
      </label> 
		</div>
    {/* email */}
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block text-gray-600 font-semibold">Email</label>
			<input type="email" readOnly name="email" value={user.email}  placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
		</div>
    {/* name */}
		<div className="space-y-1 text-sm">
			<label  className="block text-gray-600 font-semibold">User Name</label>
			<input type="text" readOnly name="name" value={user.displayName} placeholder="" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 dark:text-gray-800 focus:border-violet-600" />
		</div>
  </div>

		<button type='submit' className="block w-full p-3 text-center rounded-xl text-gray-50 bg-violet-600 font-semibold">Add</button>
	</form>
	
</div>
        </div>
  );
};

export default AddRoommate;