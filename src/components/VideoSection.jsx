import VideoA from "./Video";
import vector2 from "../assets/smVector-bottom.svg";
import image from "../assets/8-final.png";
const VideoSection = () => {
  return (
    <section className="z-0 p-4 bg-gradient-to-t from-[#383D99] to-[#341E6A]  text-center relative">
      {/* Top Image */}
      {/* <div className="absolute top-6 z-10 left-0 w-full">
        <img src={vector} alt="Top Design" className="w-full h-10" />
      </div> */}

      <VideoA />

      {/* Content Below the Video */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 px-4 py-6 lg:py-0 gap-6 items-center w-full max-w-5xl mx-auto">
        <div className="text-start md:col-span-3  col-span-5">
          <h1 className="mb-2 lg:text-3xl md:text-2xl text-xl withLine text-white">
            A Return to the
          </h1>
          <h1 className="mb-4 lg:text-3xl md:text-2xl text-xl withLine text-white">
            Golden Era of Gaming
          </h1>
          <h1 className="text-white">
            Relive the nostalgia of gaming with your mates, battling together,
            and going on epic adventures. Dropt brings back the best of 90s
            gaming, powered by blockchain technology.
          </h1>
        </div>
        <div className="overflow-hidden md:col-span-3 col-span-5 flex justify-center">
          <img
            src={image}
            alt="Gaming Image"
            className="w-full  h-auto max-w-[919px] object-cover"
          />
        </div>
      </div>

      {/* Bottom Image */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src={vector2}
          alt="Bottom Design"
          className="w-full object-cover h-10 z-0"
        />
      </div>
    </section>
  );
};
export default VideoSection;
