"use client";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import useWindowListener from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);

  useWindowListener("contextmenu", (e) => e.preventDefault());

  return (
    <div className="w-[80%] shadow-lg mx-[10%] my-10 p-3 rounded-lg bg-gray-300 flex flex-row">
      <VideoPlayer
        vdoSrc="/video/getvaccine.mp4"
        isPlaying={playing}
      ></VideoPlayer>
      <div className="text-black m-5 flex flex-col">
        Get Your Vaccine Today.
        <button
          className="block rounded-lg bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm mt-[100%]"
          id="videobutton"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
