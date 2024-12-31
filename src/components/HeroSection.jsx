import PlayNowButton from "./customButton";
import heroBottomImg from "../assets/heroBottomImg.png";

const HeroSection = () => {
  return (
    <div className="relative primaryBg z-0 text-center  overflow-hidden pb-5 py-10">
      {/* Text Section */}
      <div className="relative z-10 p-4 md:my-5 lg:my-10 my-4">
        <h1 className="text-3xl text-center md:text-5xl font-extrabold text-white relative">
          <span className="text-outline-purple withLine">
            An action-packed 1-3 player
          </span>
          <br />
          <span className="text-outline-purple withLine">
            roguelite adventure
          </span>
        </h1>
        <p className="mt-4 withLine text-lg text-gray-300">
          smash, drop, escape, repeat
        </p>
      </div>

      {/* Button Section */}
      <div className="relative z-10 mt-2">
        <PlayNowButton></PlayNowButton>
      </div>

      {/* Background Image */}
      <div className="absolute bottom-0 left-0 right-0 ">
        <img src={heroBottomImg} alt="Background" className="w-full h-10 " />
      </div>
    </div>
  );
};
export default HeroSection;
