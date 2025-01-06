"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AdminPage = () => {
  const router = useRouter();

  // Protect the admin route
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.push("/login");
    }
  }, [router]);

 
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login"); // Redirect to login page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-7xl font-bold mb-4">Admin Panel</h1>
      <p className="text-gray-600 text-3xl mb-8">Welcome to the admin panel!</p>
      <motion.div>
        <Button
          onClick={handleLogout}
          className="relative bg-red-500 hover:bg-red-600 text-white rounded-full px-9 py-7 text-xl font-medium font-Onest overflow-hidden group transform transition-all duration-500 hover:scale-110 w-[200px] h-[60px]"
        >
          <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-[-100%]">
            Log Out
          </span>
          <span className="absolute inset-0 flex items-center justify-center transform translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0">
            Log Out
          </span>
        </Button>
      </motion.div>
    </div>
  );
};

export default AdminPage;
