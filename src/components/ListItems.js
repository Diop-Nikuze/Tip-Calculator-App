import { useState } from "react";

const ListItems = () => {
  const [songs, setSongs] = useState("");

  const handleInput = () => {
    setSongs(songs);
  };

  return (
    <div>
      {songs}

      <input type="text" onChange={(e) => setSongs(e.target.value)} />

      <button onClick={handleInput}>Upload</button>
    </div>
  );
};

export default ListItems;
