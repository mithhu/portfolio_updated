"use client";

import { useRef } from "react";

export default function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <details
      className="demo"
      onToggle={(event) => {
        if (!event.currentTarget.open) videoRef.current?.pause();
      }}
    >
      <summary>
        Watch the 91-second walkthrough <span aria-hidden="true">＋</span>
      </summary>
      <div className="demo-content">
        <video
          ref={videoRef}
          controls
          preload="none"
          poster="/demo/poster.webp"
          playsInline
        >
          <source src="/demo/openmemory.mp4" type="video/mp4" />
          <track
            kind="captions"
            src="/demo/captions.vtt"
            srcLang="en"
            label="English"
            default
          />
          Your browser does not support video.{" "}
          <a href="/demo/openmemory.mp4">Download the walkthrough</a>.
        </video>
        <p className="small-note">
          Female-narrated, edited captures of the real app. Fictional book and
          movie memories; not a latency benchmark.{" "}
          <a href="/demo/transcript.txt">Read the transcript ↗</a>
        </p>
      </div>
    </details>
  );
}
