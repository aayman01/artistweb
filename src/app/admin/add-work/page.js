"use client";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: null,
    tags: [],
    isLatest: false,
  });
  const [loading, setLoading] = useState(false);

  const [availableTags, setAvailableTags] = useState([
    "Web Development",
    "Mobile App",
    "Design",
    "UI/UX",
  ]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
              type === 'file' ? files[0] : 
              value
    }));
  };

  // Handle tag selection
  const handleTagChange = (e) => {
    const selectedTag = e.target.value;
    if (selectedTag) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, selectedTag],
      }));
      setAvailableTags((prev) => prev.filter((tag) => tag !== selectedTag));
    }
  };

  // Handle removing tags
  const removeTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
    setAvailableTags((prev) => [...prev, tagToRemove].sort());
  };

  const uploadToImageBB = async (file) => {
    const apiKey = process.env.NEXT_PUBLIC_IMAGEBB_API_KEY; // Add your ImageBB API key in .env.local
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        return data.data.url; // Returns the URL of the uploaded image
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
        // Upload image to ImageBB first
        imageUrl = await uploadToImageBB(formData.image);
      }

      // Prepare the final data with the image URL
      const finalData = {
        title: formData.title,
        imageUrl: imageUrl,
        tags: formData.tags,
        isLatest: formData.isLatest
      };

      console.log('Final Form Data:', finalData);

      // Here you would send finalData to your backend
      /*
      const response = await fetch('/api/works', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData)
      });
      */

      // Reset form after successful submission
      setFormData({
        title: "",
        image: null,
        tags: [],
        isLatest: false
      });
      
    //   alert('Work added successfully!');

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error adding work. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Work</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter work title"
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

        {/* Tags Selection */}
        <div className="space-y-2">
          <label className="block mb-2">Select Tags</label>
          <div className="relative">
            <select
              value=""
              onChange={handleTagChange}
              className="w-full px-2 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select a tag...</option>
              {availableTags.map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <div className="absolute inset-0 flex items-center flex-wrap gap-2 ml-2 pointer-events-none">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-3 py-1 rounded-full flex items-center justify-center gap-2 pointer-events-auto"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Toggle */}
        <div className="flex items-center">
          <label className="mr-3">Latest Work</label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox"
              name="isLatest"
              checked={formData.isLatest}
              onChange={handleChange}
              className="sr-only peer" 
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Updated Submit Button with Loading State */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Adding Work...' : 'Add Work'}
        </button>
      </form>
    </div>
  );
};

export default Page;
