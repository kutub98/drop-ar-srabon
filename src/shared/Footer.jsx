import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import smLogo from "../assets/smLogo.png";
import facebook from "../assets/facebook.png";
import tikTok from "../assets/tiktok.png";
import youTube from "../assets/youtube.png";
import twitter from "../assets/twitter.png";

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full px-5 primaryBg">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex flex-col justify-center gap-2 text-center items-center mx-auto py-6">
          <img src={smLogo} width={227} height={80} />
          <ul className="mb-4 mt-4 flex  gap-8 lg:mb-0  lg:flex-row lg:items-center lg:gap-6">
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
          <ul className=" mt-4 flex  gap-8 lg:mb-0  lg:flex-row lg:items-center lg:gap-6">
            <img src={tikTok} className="h-5 w-5 object-cover" />
            <img src={twitter} className="h-5 w-5 object-cover" />
            <img src={facebook} className="h-5 w-5 object-cover" />
            <img src={youTube} className="h-5 w-5 object-cover" />
          </ul>
        </div>

        <div className="mt-12 flex w-full items-center justify-center border-t border-gray-600 py-4 flex-col sm:flex-row md:justify-between">
          {/* Copyright Section */}
          <Typography
            variant="small"
            className="order-2 md:order-1 text-center font-normal text-gray-500 sm:mb-0 sm:text-left"
          >
            &copy; {currentYear} <a href="/">Dropt</a>. All Rights Reserved.
          </Typography>

          {/* Links Section */}
          <ul className="flex justify-center sm:justify-end gap-3 order-1 md:order-2  sm:mt-0">
            <li>
              <Link to="#" className="text-gray-500 hover:text-blue-500">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:text-blue-500">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
