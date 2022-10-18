import { useState } from "react";
import DesktopNav, { MobileNav } from "./Nav";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleMenu() {
    setToggleMenu((prevValue) => !prevValue);
  }

  return (
    <header className="w-[85%] m-auto mt-10 flex items-center justify-between md:mt-20 lg:mt-10 border-red-600 border-2">
      <div className="absolute top-0 left-0 w-full">
        <img
          className="hidden w-full lg:block"
          src="/images/image-hero-desktop.jpg"
          alt=""
        />
        <img
          className="w-full lg:hidden"
          src="/images/image-hero-mobile.jpg"
          alt=""
        />
      </div>
      <img className="w-40 z-10" src="/images/logo.svg" alt="" />
      <img
        style={{ display: toggleMenu && "none" }}
        onClick={handleMenu}
        className="w-6 md:hidden z-10"
        src="/images/icon-hamburger.svg"
        alt=""
      />
      <DesktopNav />
      <MobileNav handleMenu={handleMenu} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
