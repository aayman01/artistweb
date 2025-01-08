"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [formData, setFormData] = useState({
    client_name: "",
    company_name: "",
    company_logo: null,
    feedback: "",
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
      if (formData.company_logo) {
        imageUrl = await uploadToImageBB(formData.company_logo);
      }

      const finalData = {
        client_name: formData.client_name,
        company_name: formData.company_name,
        company_logo: imageUrl,
        feedback: formData.feedback,
      };
      console.log(finalData);

      await axios.post('/api/add-feedback', finalData).then((res) => {
        if(res?.data.success){
          toast.success("Successfully Added Review!");
          setFormData({
            client_name: "",
            company_name: "",
            company_logo: null,
          });
        }
      }).catch((err) => {
        toast.error('Error adding review', err.message);
      });
      

    } catch (error) {
      toast.error('Error adding review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Add New Review</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Client Name Input */}
        <div className="flex items-center gap-4">
          <div className="w-1/2">
            <label className="block mb-2">Client Name</label>
            <input
              type="text"
              name="client_name"
              value={formData.client_name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter client name"
              required
            />
          </div>

          {/* Company Name Input */}
          <div className="w-1/2">
            <label className="block mb-2">Company Name</label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter company name"
              required
            />
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-2">Upload Image</label>
          <input
            type="file"
            name="company_logo"
            onChange={handleChange}
            accept="image/*"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Feedback</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter client feedback"
            rows="4"
            required
          />
        </div>

        {/* Submit Button with Loading State */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Adding Review..." : "Add Review"}
        </button>
      </form>
    </div>
  );
};

export default Page;
