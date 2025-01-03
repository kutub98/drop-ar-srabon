import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import star from "../assets/start.png";
import subtract from "../assets/Subtract.png";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function ResponsiveCarousel() {
  return (
    <div className="w-full primaryBg relative max-w-6xl mx-auto">
      <div className="text-center flex flex-col gap-2 mt-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl withLine text-white">
          What People are Saying
        </h1>
        <div className="md:flex my-2 md:flex-row flex justify-center flex-col text-center items-center">
          <div className="sm:flex block items-center gap-2">
            <p className="flex items-center gap-2">
              <img src={star} className="h-8 w-8" />
              <span className=" text-white font-bold text-base">48</span>
              <span className=" text-gray-400 text-base">out of 5.0</span>
            </p>
            <span className=" text-gray-400 text-base">
              based on 1000+ reviews
            </span>
          </div>
        </div>
      </div>
      <Carousel
        showDots={true}
        infinite={true}
        responsive={responsive}
        autoPlaySpeed={3000}
        autoPlay={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
        className="overflow-hidden w-full"
        lazyLoad={true}
        centerMode={false}
      >
        {/* Slide Content */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-[300px] md:h-[400px] bg-fit bg-center bg-no-repeat flex flex-col justify-center items-center text-white text-center p-4 rounded-lg shadow-md"
            style={{
              backgroundImage: `url(${subtract})`
            }}
          >
            <div className="flex justify-center mb-4 py-4 mx-4">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <img
                  key={starIndex}
                  src={star}
                  className="h-6 w-6 text-yellow-500"
                  alt="Star Icon"
                />
              ))}
            </div>
            <p className="text-[20px] px-4 font-semibold">
              “omg Dropt is seriously the greatest game I have ever played in my
              entire life!!!!!!”
            </p>
            <span className="mt-4 text-sm italic">Raving fan</span>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
