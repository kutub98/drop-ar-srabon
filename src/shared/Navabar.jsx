import { useState, useEffect } from "react";
import {
  Drawer,
  Typography,
  Button,
  IconButton
} from "@material-tailwind/react";
import headerImg from "../assets/navBgTopImg.png";
import smLogo from "../assets/smLogo.png";
import bigLogo from "../assets/bigLogo.png";
import vector from "../assets/Vector.png";
import vector2 from "../assets/smVector-bottom.svg";
import scrollIcon from "../assets/scrollIcon.png";
import facebook from "../assets/facebook.png";
import tikTok from "../assets/tiktok.png";
import youTube from "../assets/youtube.png";
import twitter from "../assets/twitter.png";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrollDown, setScrollDown] = useState(true);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Wiki", "Mint", "Shop", "Contact"].map((item) => (
        <Typography
          as="li"
          key={item}
          variant="small"
          className="p-1 font-normal text-white"
        >
          <a href="#" className="flex items-center">
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );
  const navListIcon = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <img src={tikTok} className="h-5 w-5 object-cover" />
      <img src={twitter} className="h-5 w-5 object-cover" />
      <img src={facebook} className="h-5 w-5 object-cover" />
      <img src={youTube} className="h-5 w-5 object-cover" />
      <button className="relative px-6 py-3 text-white font-bold bg-[#ED00FF] rounded-lg hover:bg-pink-600 focus:outline-none  border-2 border-[#28194c]">
        <span className="absolute inset-0 bg-[#E9E74C] -z-10 translate-y-1 translate-x-1 rounded-lg"></span>
        PLAY NOW
      </button>
    </ul>
  );

  return (
    <>
      <div
        className={`relative w-full primaryBg ${
          scrollDown ? "min-h-screen" : ""
        }`}
      >
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${headerImg})`,
            height: "20px" // Adjust height based on view
          }}
        ></div>

        {/* NavBar Content */}
        <div className="relative flex items-center justify-between w-full text-white z-10 px-4 py-1 lg:py-2">
          {/* Left Navigation */}
          <div className="hidden lg:block">{navList}</div>

          {/* Logo */}
          {scrollDown ? (
            <img
              src={smLogo}
              alt="Logo"
              className="z-10 block lg:hidden lg:h-[80px] w-[165px] md:h-[50px] h-[48px] transition-all duration-500 transform ease-in-out scale-110 opacity-100"
            />
          ) : (
            <img
              src={smLogo}
              alt="Logo"
              className="z-10 lg:h-[80px] lg:w-auto w-[165px] md:h-[50px] h-[48px] transition-all duration-500 transform ease-in-out scale-110 opacity-100"
            />
          )}

          {/* Right Navigation */}
          <div className="hidden lg:block">{navListIcon}</div>

          {/* Mobile Menu Button */}
          <Button
            className="lg:hidden z-10"
            onClick={openDrawer}
            variant="text"
            color="white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>

          {/* Drawer for Mobile */}
          <Drawer
            open={open}
            onClose={closeDrawer}
            className="p-4 min-h-screen w-full primaryBg overflow-x-hidden overflow-y-scroll "
          >
            <div className="mb-6 flex items-center justify-between">
              <Typography variant="h5" className="text-white"></Typography>
              <IconButton
                variant="text"
                className="text-white"
                onClick={closeDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>

            <div className="flex flex-col">
              <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0  lg:items-center lg:gap-6">
                {["Wiki", "Mint", "Shop", "Contact"].map((item) => (
                  <Typography
                    as="li"
                    key={item}
                    variant="small"
                    className="p-1 font-normal text-white"
                  >
                    <a href="#" className="flex items-center">
                      {item}
                    </a>
                  </Typography>
                ))}
              </ul>
              <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0  lg:items-center lg:gap-6">
                <div className="flex gap-2 items-center  py-2 text-[#ED00FF]">
                  <img src={tikTok} className="h-5 w-5 object-cover" />
                  <span>TikTok</span>
                </div>
                <div className="flex gap-2 items-center  py-2 text-[#ED00FF]">
                  <img src={twitter} className="h-5 w-5 object-cover" />
                  <span>Twitter</span>
                </div>
                <div className="flex gap-2 items-center  py-2 text-[#ED00FF]">
                  <img src={facebook} className="h-5 w-5 object-cover" />
                  <span>Facebook</span>
                </div>
                <div className="flex gap-2 items-center  py-2 text-[#ED00FF]">
                  <img src={youTube} className="h-5 w-5 object-cover" />
                  <span>Youtube</span>
                </div>

                <button className="relative px-6 py-3 text-white font-bold bg-[#ED00FF] rounded-lg hover:bg-pink-600 focus:outline-none  border-2 border-[#28194c]">
                  <span className="absolute inset-0 bg-[#E9E74C] -z-10 translate-y-1 translate-x-1 rounded-lg"></span>
                  PLAY NOW
                </button>
              </ul>
            </div>
          </Drawer>
        </div>

        {/* Scroll Down Animation Section */}
        {scrollDown && (
          <div className="primaryBg relative w-full flex justify-center items-center transform transition duration-500 origin-bottom">
            <img
              className=" mt-32 animate-pulse"
              src={bigLogo}
              alt="Logo"
              height={260}
            />
          </div>
        )}
      </div>

      {/* Scroll Indicator and Action */}
      {scrollDown && (
        <div className="relative primaryBg bottomVector   justify-center items-center ">
          <img src={vector} alt="vector" height={10} className="w-full" />

          <img
            src={vector2}
            alt="vector-bottom"
            height={10}
            className="absolute  w-full left-0"
          />
          <img
            onClick={() => setScrollDown(false)}
            src={scrollIcon}
            alt="scroll-icon"
            height={50}
            className="mx-auto cursor-pointer animate-bounce lg:mt-[-350px] xl:mt-[-400px] md:mt-[-180px] mt-[-300px] "
          />
        </div>
      )}
    </>
  );
}
