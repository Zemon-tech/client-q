"use client";

import React from "react";
import VideoPlayer from "@/components/ui/video-player";

export function SiteVideo() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <VideoPlayer src="/Demo-Video.mp4" />
    </section>
  );
}


