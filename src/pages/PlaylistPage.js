import React, { useState } from "react";
import Playlist from "../components/Playlist";
import SongQueue from "../components/SongQueue";

const PlaylistPage = () => {
  const [showQueue, setShowQueue] = useState(false);

  return (
    <div>
      <Playlist />
      {showQueue && <SongQueue />}
    </div>
  );
};

export default PlaylistPage;