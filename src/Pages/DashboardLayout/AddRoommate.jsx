
import React, { use, useState } from 'react';

import Swal from 'sweetalert2';
import { imageUpload } from '../../Api/Utlits';
import { AuthContex } from '../../Provider/AuthProvider';

const AddRoommate = () => {
  // Add state for image preview and upload status
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const { user } =use(AuthContex)

  // Handle image selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setUploadSuccess(false);
    } else {
      setImagePreview(null);
    }
  };

  const handleAddDb = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'All fields are required!',
        text: 'Please fill out all fields before submitting.',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    // Get image file
    const image = form?.image?.files[0];
    if (!image) {
      Swal.fire({
        icon: 'error',
        title: 'No Image Selected',
        text: 'Please select an image.',
      });
      return;
    }
    setUploading(true);
    setUploadSuccess(false);
    try {
      // 👇 Upload image and get URL
      const imageUrl = await imageUpload(image); // You must define this
      setUploading(false);
      setUploadSuccess(true);
      const formData = new FormData(form);
      const roommate = Object.fromEntries(formData.entries());
      const roomateData = {
        likeCount: 0,
        imageUrl,
        ...roommate,
      };
      // addDb
      fetch('https://find-my-roommate-server.vercel.app/roommates', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(roomateData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'AddRoommate data successfully',
              showConfirmButton: false,
              timer: 1500,
            });
            form.reset();
            setImagePreview(null);
            setUploadSuccess(false);
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: error.message || 'Something went wrong.',
          });
        });
    } catch (error) {
      setUploading(false);
      Swal.fire({
        icon: 'error',
        title: 'Image Upload Failed',
        text: error.message || 'Could not upload image.',
      });
    }
  };

  return (
    <div  className="flex justify-center items-center mt-5 mb-5 w-10/12 mx-auto">
      <div className="w-full p-8 space-y-3 rounded-xl bg-gradient-to-br from-indigo-50 via-purple-100 to-blue-100 text-slate-800 shadow-2xl border border-indigo-200">
        <h1 className="text-2xl font-bold text-center mb-4">Add to Find Roommate</h1>
        <form onSubmit={handleAddDb} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 w-full m-auto rounded-lg flex-grow">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-violet-400 rounded-lg bg-white flex flex-col items-center justify-center shadow-md">
                <label className="flex flex-col items-center cursor-pointer w-full">
                  <input
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                  <div className="bg-gradient-to-r from-lime-500 to-green-400 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-600 transition-all duration-200 shadow">
                    Upload Image
                  </div>
                </label>
                {/* Image Preview */}
                {imagePreview && (
                  <div className="mt-4 flex flex-col items-center">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-lg border-2 border-violet-300 shadow-md"
                    />
                    {uploadSuccess && (
                      <span className="text-green-600 font-semibold mt-2">Image ready for upload!</span>
                    )}
                  </div>
                )}
                {/* Uploading Spinner */}
                {uploading && (
                  <div className="mt-2 flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    <span className="text-violet-600 font-medium">Uploading...</span>
                  </div>
                )}
              </div>
            </div>
            {/* title */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600 font-semibold">Title</label>
              <input type="text" required name="title" placeholder="Title" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
            </div>
            {/* Location  */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600 font-semibold">Location</label>
              <input type="text" required name="location" placeholder="Location" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
            </div>
            {/* Rent Amount */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600 font-semibold">Rent Amount</label>
              <input type="text" required name="amount" placeholder="Rent Amount" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
            </div>
            {/* Room Type */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600 font-semibold">
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
              <input type="text" required name="lifestyle" placeholder="Pets, Smoking, Night Owl, etc." className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
            </div>
            {/* Description*/}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600 font-semibold">Description</label>
              <input type="text" required name="description" placeholder="description" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
            </div>
            {/* Contact Info */}
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-gray-600 font-semibold">Contact Info</label>
              <input type="text" required name="contact" placeholder="Phone number" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
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
              <input type="email" readOnly name="email" value={user.email} placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
            </div>
            {/* name */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600 font-semibold">User Name</label>
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