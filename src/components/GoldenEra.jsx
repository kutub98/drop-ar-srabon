import middleImg from "../assets/Frame 5.png";
import topImg from "../assets/9.png";
const GoldenEraSection = () => {
  return (
    <section className="z-0 -mt-20 p-4 bg-gradient-to-t from-[#383D99] to-[#341E6A]  text-center ">
      {/* Top Image */}

      {/* Title */}
      <div className="w-full max-w-2xl mx-auto text-center 10">
        <h2 className="text-4xl font-bold ">A Return to the</h2>
        <h2 className="text-4xl font-bold ">Golden Era of Gaming</h2>
      </div>

      {/* Features Grid */}

      <div className="flex flex-col items-center text-center ">
        {/* Icon with Shadow */}
        <div className="relative mb-4 bg-red-500">
          <img
            src={topImg}
            alt="goldenEra"
            className=" w-full h-full object-cover absolute "
          />
          {/* middle image */}
          <img
            src={middleImg}
            alt="goldenEra"
            className=" w-full h-full object-cover  absolute "
          />
          {/* Shadow under image */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 w-16 h-2 bg-black/30 rounded-full blur-md" />
        </div>
        {/* Title */}
      </div>

      {/* Play Now Button */}
      <div className="mt-8">
        <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-lg font-bold rounded-lg">
          Play Now
        </button>
      </div>
    </section>
  );
};

export default GoldenEraSection;
