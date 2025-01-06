'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Logout() {
    const router = useRouter();
    const handleLogout = () => {
      localStorage.removeItem("isLoggedIn"); 
      router.push("/login"); 
    };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Log Out
      </button>
    </div>
  );
}
