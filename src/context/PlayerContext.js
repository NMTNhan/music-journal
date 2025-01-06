import React, { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [songQueue, setSongQueue] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // Function to reset the player state
  const resetPlayer = () => {
    setCurrentSong(null);
    setSongQueue([]);
    setIsPlaying(false);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        songQueue,
        setSongQueue,
        isPlaying,
        setIsPlaying,
        volume,
        setVolume,
        resetPlayer, // Expose resetPlayer to the context
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
