import "./App.css";
import { VideoPlayer } from "./components/VideoPlayer";
import { VideoList } from "./components/VideoList";
import { Navbar } from "./components/Navbar";
import { videoData } from "./utils/videoData";
import { useState } from "react";

function App() {
  const [videoForPlay, setVideoForPlay] = useState(videoData[0]);
  const handlePlay = (id) => {
    const findVideo = videoData.find((list) => list.id === id);
    setVideoForPlay(findVideo);
  };

  const handleNext = () => {
    let getID = +videoForPlay.id;
    getID++;
    const findVideo = videoData.find((list) => list.id == getID);
    setVideoForPlay(findVideo);
  };

  const handlePrev = () => {
    let getID = +videoForPlay.id;
    getID--;
    const findVideo = videoData.find((list) => list.id == getID);
    setVideoForPlay(findVideo);
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-full flex justify-center items-center sm:mt-11 mt-3">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-[80%]">
          <div className="md:col-span-2">
            <VideoPlayer
              videoForPlay={videoForPlay}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          </div>
          <div className="w-full">
            <VideoList handlePlay={handlePlay} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
