import { FooterWithSocialLinks } from "../shared/Footer";

import { Outlet } from "react-router-dom";
import { NavBar } from "../shared/Navabar";

const MainLayout = () => {
  return (
    <>
      <div className="w-full sticky top-0 p-0 z-10 bg-white shadow-md transform transition-all ease-in-out duration-300">
        <NavBar />
      </div>

      <Outlet />
      <FooterWithSocialLinks />
    </>
  );
};

export default MainLayout;
