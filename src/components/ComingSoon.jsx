import bg from "../assets/img-3.png";
import bg2 from "../assets/img-3-1.png";
import cross from "../assets/cross.png";
import hidden from "../assets/hidden-gotchi.png";
import guest from "../assets/Geist Blockchain 1.png";
import gucciLogo from "../assets/Aavegotchi text logo 2.png";
import guest2 from "../assets/guest2.png";
import clipPath from "../assets/Clip path group.png";
import hyperPlay from "../assets/HyperPlay.png";
import games from "../assets/Gam3s gg 1.png";
import bga from "../assets/BGA 1.png";
const ComingSoon = () => {
  return (
    <div className="primaryBg px-4 py-20 z-0 relative overflow-hidden">
      {/* coming soon  */}
      <div className="w-full max-w-xl overflow-hidden mx-auto flex flex-col gap-2 justify-center items-center text-center">
        <button className=" bg-[#F2BE28] px-3 py-1 rounded-2xl">
          <h1 className=" text-lg  font-extrabold text-white relative">
            <span className="comingSoon uppercase">Coming Soon</span>
          </h1>
        </button>

        <span className="text-2xl mt-4 sm:text-3xl lg:text-4xl text-white withLine">
          Create your own
        </span>
        <span className="text-2xl mt-0 sm:text-3xl lg:text-4xl text-white withLine">
          Dropt experience
        </span>
        <p className="text-base text-white my-4">
          Design your own dungeons with our intuitive world-building tools. Turn
          on friendly fire, tweak mechanics, and craft entirely new challenges.
        </p>
      </div>
      {/* big img start */}
      <div
        className="relative ewq hidden md:block kl object-cover sm:h-[866px] bg-no-repeat sm:w-full h-[390px] w-[390px] overflow-hidden bg-center text-white"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div
        className="relative ewq block sm:hidden kl object-cover sm:h-[866px] bg-no-repeat sm:w-full h-[390px] w-[390px] overflow-hidden bg-center text-white"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>
      {/* big img end */}
      <div className=" z-[0] px-4 max-w-5xl mx-auto rounded py-4 relative md:-mt-64 -mt-32 bg-[#28194c8c] grid gird grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <img
            src={guest}
            className=" sm:w-[153px] sm:h-[33px] w-[115px] h-[24px]"
          />
          <p className="flex flex-col mt-8 mb-4">
            <span className="text-2xl  sm:text-3xl lg:text-4xl text-white withLine">
              Powered by
            </span>{" "}
            <span className="text-2xl mt-0 sm:text-3xl lg:text-4xl text-white withLine">
              Geist Blockchain
            </span>
          </p>
          <p className="text-white">
            Secure, frictionless, and designed specifically for gamers, Dropt
            runs on the Geist Blockchain.
          </p>
        </div>

        <div className="flex justify-end relative">
          <img
            src={hidden}
            className="mt-2 z-[1] sm:h-[331px]  sm:w-[328px] h-[159.5px] w-[160px]"
          />
        </div>
        <img
          className=" w-[313px] h-[64px] absolute z-0 bottom-0 sm:bottom-0 left-0 opacity-30 sm:w-[1019px] sm:h-[221px]"
          src={guest2}
        />
        <img src={cross} className=" absolute top-2 right-5 h-[153px] " />
      </div>
      {/* bottom play now */}
      <div className="w-full relative max-w-5xl px-8 py-4 md:-mt-6  grid grid-cols-1 md:grid-cols-2 gap-1 z-0 mx-auto  rounded-lg bg-gradient-to-b from-[#191D7A] to-[#383D99] ">
        <div className="flex flex-col gap-2">
          <img
            src={gucciLogo}
            className=" sm:w-[153px] sm:h-[33px] w-[115px] h-[24px]"
          />
          <p className="flex  flex-row gap-1 mt-8 mb-4">
            <span className="text-xl  sm:text-2xl lg:text-3xl text-white withLine">
              Aavegotchi
            </span>{" "}
            <span className="text-xl mt-0 sm:text-2xl lg:text-3xl text-white withLine">
              Ecosystem
            </span>
          </p>
          <p className="text-white">
            Dropt is built for and funded by the <br />
            <span>Aavegotchi DAO</span>
          </p>
          <div className=" mt-5  ">
            <button className="relative px-6 py-3 text-white font-bold bg-[#ED00FF] rounded-lg hover:bg-pink-600 focus:outline-none  border-2 border-[#28194c]">
              <span className="absolute inset-0 bg-[#E9E74C] -z-10 translate-y-1 translate-x-1 rounded-lg"></span>
              PLAY NOW
            </button>
          </div>
        </div>
        <div className="flex mt-8 flex-col gap-2 md:border-l-2 border-t-2 md:border-t-0 py-2 border-s-light-green-100 border-l-0 md:p-6 p-0 ">
          <h1 className="text-white">Our Parents:</h1>
          <div className="flex flex-col gap-3">
            <div className="flex md:flex-col flex-row gap-3">
              <img src={clipPath} className="w-[146px] h-[28px]"></img>
              <img src={hyperPlay} className="w-[146px] h-[28px]"></img>
            </div>
            <div className="flex md:flex-col flex-row gap-3">
              <img src={games} className="w-[163px] h-[20px]"></img>
              <img
                src={bga}
                className="md:w-[90] md:h-[26px] w-[70px] h-[22px]"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
