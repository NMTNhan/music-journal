import React from "react";
import { usePlayer } from "../context/PlayerContext";

const PlayerPage = () => {
  const { currentSong } = usePlayer();

  if (!currentSong) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-900 text-white">
        <h1 className="text-xl font-bold">No song selected</h1>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-b from-blue-200 to-blue-900 text-white flex flex-col items-center justify-center p-4">
      <img
        src={`http://localhost:5000/${currentSong.imagePath}` || "/placeholder.png"}
        alt="Song"
        className="w-64 h-64 object-cover rounded-md shadow-lg mb-4"
      />
      <h1 className="text-5xl font-bold mb-2">{currentSong.name}</h1>
      <h2 className="text-3xl font-semibold text-gray-300 mb-2">{currentSong.artist}</h2>
      <p className="text-xl font-semilight italic text-gray-400 mb-1">Mood: {currentSong.mood}</p>
      <p className="text-xl font-semilight italic text-gray-400 mb-1">Tags: {currentSong.tags?.join(", ")}</p>
      <p className="text-2xl font-light text-gray-400 text-center max-w-lg mt-6">{currentSong.journal}</p>
    </div>
  );
};

export default PlayerPage;
