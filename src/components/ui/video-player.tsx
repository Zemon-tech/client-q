"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay might be blocked until user interaction; ignore
        });
      }
    }
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    if (!nextMuted) {
      videoRef.current.volume = 1;
    }
    setIsMuted(nextMuted);
  };

  return (
    <motion.div
      className="relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <video
        ref={videoRef}
        className="w-full h-auto"
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        controls={false}
      />

      <div className="absolute bottom-3 right-3">
        <Button
          onClick={toggleMute}
          variant="ghost"
          size="icon"
          className="text-white bg-[#111111d1]/60 hover:bg-[#111111d1]"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </Button>
      </div>
    </motion.div>
  );
};

export default VideoPlayer;
