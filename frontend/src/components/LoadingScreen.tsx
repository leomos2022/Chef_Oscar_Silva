"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-[#1a4d3a] to-[#2d6a4f] flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-ping" />
          <div className="absolute inset-0 border-4 border-t-white border-r-white border-b-transparent border-l-transparent rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl">👨‍🍳</span>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-3xl font-bold text-white mb-2 animate-pulse">
          Chef Oscar Silva
        </h2>
        <p className="text-white/80 text-sm">
          Preparing your culinary experience...
        </p>
      </div>
    </div>
  );
}
