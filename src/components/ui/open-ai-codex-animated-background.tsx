"use client"

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const OpenAICodexAnimatedBackground = () => {
  const { width, height } = useWindowSize();

  // Don't render until we have dimensions
  if (width === 0 || height === 0) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50" />
    );
  }

  return (
    <div className="w-full h-full relative">
      <UnicornScene 
        production={true} 
        projectId="1grEuiVDSVmyvEMAYhA6" 
        width={width} 
        height={height} 
      />
    </div>
  );
};

