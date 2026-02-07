"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";
import { PlayIcon } from "@phosphor-icons/react/dist/ssr/Play";
import { PauseIcon } from "@phosphor-icons/react/dist/ssr/Pause";
import { SpeakerHighIcon } from "@phosphor-icons/react/dist/ssr/SpeakerHigh";
import { SpeakerSlashIcon } from "@phosphor-icons/react/dist/ssr/SpeakerSlash";

import poster from "./poster.webp";

import styles from "./VideoSection.module.css";
import clsx from "clsx";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPaused, setIsPaused] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const pauseEventHandler = () => {
      setIsPaused(true);
    };
    const playEventHandler = () => {
      setIsPaused(false);
    };

    const videoElement = videoRef.current;

    if (!videoElement) return;

    videoElement.addEventListener("pause", pauseEventHandler);
    videoElement.addEventListener("play", playEventHandler);

    return () => {
      if (!videoElement) return;

      videoElement.removeEventListener("pause", pauseEventHandler);
      videoElement.removeEventListener("play", playEventHandler);
    };
  }, []);

  const startPlayVideo = () => {
    videoRef.current?.play();
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
  };

  const toggleMute = (e: MouseEvent<HTMLButtonElement>) => {
    if (!videoRef.current) return;

    e.stopPropagation();

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;

    if (isPaused) videoRef.current.play();
    else videoRef.current.pause();
  };

  return (
    <div className="container-fluid">
      <div className="heading text-center mb-48">
        <h2>
          Take a <span className="color-primary">Look Inside</span>
        </h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-9">
          <div
            className={styles.videoContainer}
            onClick={toggleVideoPlay}
            aria-hidden="true"
          >
            {isPaused ? (
              <button onClick={startPlayVideo} className={styles.actionButton}>
                <PlayIcon weight="fill" />
              </button>
            ) : (
              <>
                <button
                  onClick={pauseVideo}
                  className={clsx(styles.actionButton, styles.pauseButton)}
                >
                  <PauseIcon weight="fill" />
                </button>

                <button
                  onClick={toggleMute}
                  className={clsx(styles.actionButton, styles.muteButton)}
                >
                  {isMuted ? (
                    <SpeakerSlashIcon weight="fill" />
                  ) : (
                    <SpeakerHighIcon weight="fill" />
                  )}
                </button>
              </>
            )}

            <video
              ref={videoRef}
              controls={false}
              preload="none"
              poster={poster.src}
            >
              <source src="/video.mp4" type="video/mp4" />
              <track kind="captions" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
