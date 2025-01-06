'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Logout from "@/components/Logout";

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Admin Panel</h1>
      <p className="text-gray-600">Welcome to the admin panel!</p>
      <Logout />
    </div>
  );
};

export default AdminPage;

