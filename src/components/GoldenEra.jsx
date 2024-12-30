import bottomImg from "../assets/Ellipse 5.png";
import middleImg from "../assets/Frame 5.png";
import vector2 from "../assets/smVector-bottom.svg";
import img1 from "../assets/9.png";
import img2 from "../assets/2-2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
// import PlayNowButton from "./customButton";
const GoldenEra = () => {
  return (
    <div className="p-4 mx-auto relative primaryBg z-0">
      <div className="w-full mx-auto max-w-2xl text-center flex flex-col gap-2 mb-8 p-5 md:p-6 lg:p-8">
        <h1 className="withLine text-2xl md:text-3xl lg:text-4 text-white">
          A return to the
        </h1>
        <h1 className="withLine text-2xl md:text-3xl lg:text-4 text-white">
          Golden Era Of Gaming
        </h1>
      </div>
      <div className="w-full my-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:space-y-8 space-y-16">
        <div className="flex topOne lg:-mb-8 md:-mb-14 -mb-20 flex-col gap-2 justify-center items-center text-center">
          <img
            src={img1}
            className="h-[126px] w-[126px] md:h-[221px] md:w-[221px] animate-bounce delay-100  -mb-4"
          />
          <img
            src={middleImg}
            className="md:h-[88px] md:w-[306px] w-[165px] h-[50.33px]"
          />
          <img
            src={bottomImg}
            className="md:h-[25px] md:w-[160px] h-[14.33px] w-[91.5px] mt-6"
          />
          <h1 className="withLine text-white mt-5">Quest-Based Rewards</h1>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <img
            src={img2}
            className="h-[126px] w-[126px] md:h-[221px] md:w-[221px] animate-bounce delay-150  -mb-4"
          />
          <img
            src={middleImg}
            className="md:h-[88px] md:w-[306px] w-[165px] h-[50.33px]"
          />
          <img
            src={bottomImg}
            className="md:h-[25px] md:w-[160px] h-[14.33px] w-[91.5px] mt-6"
          />
          <h1 className="withLine text-white mt-5">Tournaments</h1>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <img
            src={img3}
            className="h-[126px] w-[126px] md:h-[221px] md:w-[221px] animate-bounce  delay-300 -mb-4"
          />
          <img
            src={middleImg}
            className="md:h-[88px] md:w-[306px] w-[165px] h-[50.33px]"
          />
          <img
            src={bottomImg}
            className="md:h-[25px] md:w-[160px] h-[14.33px] w-[91.5px] mt-6"
          />
          <h1 className="withLine text-white mt-5">Cooperative Play</h1>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <img
            src={img4}
            className="h-[126px] w-[126px] md:h-[221px] md:w-[221px] animate-bounce delay-500  -mb-4"
          />
          <img
            src={middleImg}
            className="md:h-[88px] md:w-[306px] w-[165px] h-[50.33px]"
          />
          <img
            src={bottomImg}
            className="md:h-[25px] md:w-[160px] h-[14.33px] w-[91.5px] mt-6"
          />
          <h1 className="withLine text-white mt-5">Frequent New Challenges</h1>
        </div>
      </div>
      {/* button */}
      <div className="flex justify-center mt-10 mb-20">
        <button className="relative px-6 py-3 text-white font-bold bg-[#ED00FF] rounded-lg hover:bg-pink-600 focus:outline-none  border-2 border-[#28194c]">
          <span className="absolute inset-0 bg-[#E9E74C] -z-10 translate-y-1 translate-x-1 rounded-lg"></span>
          PLAY NOW
        </button>
      </div>

      {/* Bottom Image */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src={vector2}
          alt="Bottom Design"
          className="w-full object-cover h-10 z-0"
        />
      </div>
    </div>
  );
};
export default GoldenEra;
