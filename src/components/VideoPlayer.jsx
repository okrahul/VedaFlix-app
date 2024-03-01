import { useState } from "react";
import ReactPlayer from "react-player";
import "../App.css";
import { DropdownHoverButton } from "../components/Dropdown";
export function VideoPlayer({ videoForPlay, handleNext, handlePrev }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [loop, setLoop] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (state) => {
    setPlayedSeconds(state.playedSeconds);
  };

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  return (
    <div className="flex items-center justify-center flex-col w-full">
      <ReactPlayer
        className="mb-4 "
        url={videoForPlay.videoUrl || "https://vimeo.com/189877156"}
        playing={isPlaying}
        onProgress={handleProgress}
        onDuration={(value) => setDuration(value)}
        width="100%"
        playbackRate={speed}
        loop={loop}
      />

      <div className="w-full">
        <progress
          className="w-full react-player rounded-lg"
          max={duration}
          value={playedSeconds}
          style={{ borderRadius: "12px" }}
        ></progress>

        <div className="flex items-center justify-between">
          <span>{formatTime(playedSeconds)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <div className="my-2 flex flex-row justify-around py-3">
          <DropdownHoverButton handleSpeed={(speed) => setSpeed(speed)} />
          <button
            onClick={() => setLoop((prev) => !prev)}
            className={`text-white focus:outline-none ${
              loop
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-700 hover:bg-blue-800"
            } rounded-lg px-2`}
          >
            <ion-icon name="infinite-outline"></ion-icon>
          </button>
        </div>

        <div className="flex items-center w-full flex-row justify-around">
          <button onClick={handlePrev} disabled={videoForPlay.id == 1}>
            <ion-icon name="play-back-outline"></ion-icon>
          </button>

          <button onClick={handlePlayPause}>
            {isPlaying ? (
              <ion-icon name="pause-outline"></ion-icon>
            ) : (
              <ion-icon name="play-outline"></ion-icon>
            )}
          </button>
          <button onClick={handleNext} disabled={videoForPlay.id == 20}>
            <ion-icon name="play-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

//////////////////////
