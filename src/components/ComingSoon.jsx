import bg from "../assets/img-3.png";
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
    <div className=" w-full bg-[#28194c] -z-50">
      {/* top section start */}
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
      {/* top section end */}
      <div className="relative bg-[#28194c]">
        <img
          src={bg}
          alt="Background"
          className="max-w-full md:h-[800px]  w-full h-full object-cover"
        />
        <div className="w-full relative  -mt-24 bg-gradient-to-b  bg-[#362E82] pb-10">
          {/* <img src={vector} className="w-full object-cover absolute -mt-10" /> */}
          <div className="w-full max-w-5xl mx-auto flex flex-col gap-10">
            <div className="flex h-[300px] z-[2] mt-14 md:-mt-20 relative flex-col gap-10 sm:flex-row bg-[#28194cfd] p-4 sm:p-10 rounded-3xl">
              <div className="flex flex-col gap-2 z-10">
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
                  Secure, frictionless, and designed specifically for gamers,
                  Dropt runs on the Geist Blockchain.
                </p>
              </div>
              <div className="">
                <div className="flex justify-end relative">
                  <img
                    src={hidden}
                    className=" md:-mt-2 -mt-12 z-[1] sm:h-[340px]  sm:w-[331px] h-[159.5px] w-[160px]"
                  />
                </div>

                <img
                  src={cross}
                  className=" absolute top-2 right-5 sm:h-[201px] sm:w-[201px] w-[103px] h-[103px] z-[1] "
                />
                <img
                  className=" absolute bottom-0 left-0 opacity-60 -z[1]"
                  src={guest2}
                />
              </div>
            </div>

            <div className="w-full relative max-w-5xl px-8 py-4 md:-mt-6  grid grid-cols-1 md:grid-cols-2 gap-1 z-0 mx-auto  rounded-3xl bg-[#383D99] ">
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
                <div className=" mt-5  hidden sm:block ">
                  <button className="relative px-6  py-3 text-white font-bold bg-[#ED00FF] rounded-lg hover:bg-pink-600 focus:outline-none  border-2 border-[#28194c]">
                    <span className="absolute inset-0 bg-[#E9E74C] -z-10 translate-y-1 translate-x-1 rounded-lg"></span>
                    PLAY NOW
                  </button>
                </div>
              </div>
              <div className="flex mt-8 flex-col gap-2 md:border-l-2 border-t-2 md:border-t-0 py-2 border-s-light-green-100 border-l-0 md:p-6 p-0 ">
                <h1 className="text-white">Our Partners:</h1>
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
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
