import img1 from "../assets/3-1.png";
import vector1 from "../assets/Vector 21.png";
import img2 from "../assets/1.png";
import diamond from "../assets/diamond.png";
import coin from "../assets/coin.png";
import Review from "./Review";

const DetailsAndReview = () => {
  return (
    <div className="px-4 h-auto relative primaryBg z-0 ">
      {/* 1st one  */}
      <div className=" w-full max-w-6xl mx-auto grid gird-cols-1 md:grid-cols-2 items-center gap-14">
        <div className=" order-2 md:order-1 text-center items-center justify-center flex">
          <img
            src={img1}
            className="md:h-[575px] md:w-[575px] w-[316px] h-[320px"
          />
        </div>
        <div className="order-1 md:order-2 text-start py-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white withLine">
            Descend
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white withLine">
            into Madness
          </h1>
          <h1 className="text-white mt-5">
            Deep within the mines, a vile corruption spreads, threatening the
            very essence of the Gotchiverse. Go at it alone or assemble your
            squad to take on the spreading chaos.
          </h1>
        </div>
      </div>

      {/* second one */}
      <div className=" w-full max-w-6xl mx-auto grid gird-cols-1 md:grid-cols-2 items-center gap-14">
        <div className=" text-start py-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white withLine">
            For the Love
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white withLine">
            of Gaming
          </h1>
          <h1 className="text-white mt-5">
            We are gamers building games for gamers. Blockchain is a feature,
            not the focus. Dictumst auctor sollicitudin consequat nisl pharetra
            scelerisque elit.
          </h1>
          <div className="my-6 flex flex-col gap-3">
            <p className="items-center flex gap-2">
              <img src={diamond} />
              <span className="text-white">Some Game Feature 1</span>
            </p>
            <p className="items-center flex gap-2">
              <img src={coin} />
              <span className="text-white">Some Game Feature 2</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center relative">
          <img
            src={vector1}
            className="md:w-[583px] md:h-[565px] w-[358px] h-[348px]"
          />
          <img
            src={img2}
            className="md:h-[398px] md:w-[348px] h-[244px] w-[213px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* review  */}

      <div className="  w-full">
        <Review />
      </div>

      <div className="flex justify-center py-10   ">
        <button className="relative w-full md:w-auto px-6 py-3 text-white font-bold bg-[#ED00FF] rounded-lg hover:bg-pink-600 focus:outline-none  border-2 border-[#28194c]">
          <span className="absolute inset-0 bg-[#E9E74C] -z-10 translate-y-1 translate-x-1 rounded-lg"></span>
          PLAY NOW
        </button>
      </div>
    </div>
  );
};
export default DetailsAndReview;
