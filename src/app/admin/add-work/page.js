"use client";
import React, { useState } from 'react';

const Page = () => {
    const [formData, setFormData] = useState({
        title: '',
        image: null,
        tags: [],
        isLatest: false
    });

    // Define all available tags
    const [availableTags, setAvailableTags] = useState([
        "Web Development",
        "Mobile App",
        "Design",
        "UI/UX"
    ]);

    // Handle tag selection
    const handleTagChange = (e) => {
        const selectedTag = e.target.value;
        if (selectedTag) {
            setFormData(prev => ({
                ...prev,
                tags: [...prev.tags, selectedTag]
            }));
            // Remove the selected tag from available options
            setAvailableTags(prev => prev.filter(tag => tag !== selectedTag));
        }
    };

    // Handle removing tags
    const removeTag = (tagToRemove) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
        // Add the removed tag back to available options
        setAvailableTags(prev => [...prev, tagToRemove].sort());
    };

    console.log(formData)

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Add New Work</h1>
            
            <form className="space-y-4">
                {/* Title Input */}
                <div>
                    <label className="block mb-2">Title</label>
                    <input 
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="Enter work title"
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block mb-2">Upload Image</label>
                    <input 
                        type="file"
                        accept="image/*"
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* Combined Tags Selection */}
                <div className="space-y-2">
                    <label className="block mb-2">Select Tags</label>
                    <div className="relative">
                        <select 
                            value=""
                            onChange={handleTagChange}
                            className="w-full px-2 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select a tag...</option>
                            {availableTags.map((tag, index) => (
                                <option key={index} value={tag}>
                                    {tag}
                                </option>
                            ))}
                        </select>
                        <div className="absolute inset-0 flex flex-wrap gap-2 p-2 pointer-events-none">
                            {formData.tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-2 pointer-events-auto"
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
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>

                {/* Enhanced styling for other inputs */}
                <style jsx global>{`
                    input[type="text"], input[type="file"] {
                        @apply focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200;
                    }
                `}</style>

                {/* Submit Button */}
                <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Add Work
                </button>
            </form>
        </div>
    );
};

export default Page;