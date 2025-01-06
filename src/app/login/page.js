'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const validUser = {
      username: "admin",
      password: "admin123",
    };

    if (username === validUser.username && password === validUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen rounded-2xl">
      <div className="w-96 p-8 rounded shadow-xl">
        <h1 className="text-5xl font-semibold text-center mb-4">Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              placeholder="admin"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              placeholder="admin123"
              required
            />
          </div>
          <Button type="submit" className="relative bg-[#545cff] hover:bg-[#545cff] text-white rounded-full px-6 py-6 text-xl font-medium font-Onest overflow-hidden group transform transition-all duration-500 hover:scale-110 w-full h-[20px]">
            <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-[-100%]">
              Login
            </span>
            <span className="absolute inset-0 flex items-center justify-center transform translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0">
              Login
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
