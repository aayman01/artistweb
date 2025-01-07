"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

const RouteChangeWrapper = ({ children }) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjusted for new animation duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {children}
    </>
  );
};

export default RouteChangeWrapper; 