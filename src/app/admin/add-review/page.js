"use client";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    companyName: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const uploadToImageBB = async (file) => {
    const apiKey = process.env.NEXT_PUBLIC_IMAGEBB_API_KEY;
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        return data.data.url;
      } else {
        throw new Error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading to ImageBB:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = null;
      if (formData.image) {
        imageUrl = await uploadToImageBB(formData.image);
      }

      const finalData = {
        clientName: formData.clientName,
        companyName: formData.companyName,
        imageUrl: imageUrl,
      };

      console.log('Final Form Data:', finalData);

      // Reset form after successful submission
      setFormData({
        clientName: "",
        companyName: "",
        image: null,
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error adding review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Review</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Client Name Input */}
        <div>
          <label className="block mb-2">Client Name</label>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter client name"
            required
          />
        </div>

        {/* Company Name Input */}
        <div>
          <label className="block mb-2">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter company name"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-2">Upload Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Submit Button with Loading State */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Adding Review...' : 'Add Review'}
        </button>
      </form>
    </div>
  );
};

export default Page;
