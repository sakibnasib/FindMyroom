import React, { useState } from 'react';

const AddRoommate = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    rentAmount: '',
    roomType: '',
    lifestylePreferences: '',
    description: '',
    contactInfo: '',
    availability: 'available',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', { ...formData });
    // Backend API call here
  };

  return (
    <form onSubmit={handleSubmit} className="bg-violet-200 mt-5 p-4 w-9/12 mx-auto rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Add a New Listing</h2>

      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </label>

      <label className="block mb-2">
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </label>

      <label className="block mb-2">
        Rent Amount:
        <input
          type="number"
          name="rentAmount"
          value={formData.rentAmount}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </label>

      <label className="block mb-2">
        Room Type:
        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
        </select>
      </label>

      <label className="block mb-2">
        Lifestyle Preferences:
        <input
          type="text"
          name="lifestylePreferences"
          value={formData.lifestylePreferences}
          onChange={handleChange}
          placeholder="Pets, Smoking, Night Owl, etc."
          className="w-full border p-2 rounded"
        />
      </label>

      <label className="block mb-2">
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </label>

      <label className="block mb-2">
        Contact Info:
        <input
          type="text"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </label>

      <label className="block mb-2">
        Availability:
        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="available">Available</option>
          <option value="not available">Not Available</option>
        </select>
      </label>

      <label className="block mb-2">
        User Email (Read Only):
        <input
          type="email"
        //   value={userEmail}
          readOnly
          className="w-full border p-2 rounded bg-gray-100"
        />
      </label>

      <label className="block mb-4">
        User Name (Read Only):
        <input
          type="text"
        //   value={userName}
          readOnly
          className="w-full border p-2 rounded bg-gray-100"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-600 w-full text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
};

export default AddRoommate;