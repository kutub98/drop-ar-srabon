import { useState } from "react";
import thumbnail from "../assets/thumbnail.png";
import { Carousel } from "@material-tailwind/react";

export default function VideoA() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <Carousel
      className="relative py-8 z-10 w-full max-w-5xl mx-auto bg-[#28194C80] rounded-lg overflow-hidden "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-4">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      autoplay={true}
      infinite={true}
    >
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className=" w-full max-w-4xl mx-auto  border-4 rounded-lg overflow-x-hidden relative"
          >
            {isPlaying ? (
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/video-id?autoplay=1" // Replace with your video ID
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="relative">
                <img
                  src={thumbnail}
                  alt="Video Thumbnail"
                  className="w-full aspect-video object-cover"
                />
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-16 w-16 text-white"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ))}
    </Carousel>
  );
}
