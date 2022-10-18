function DesktopNav() {
  return (
    <nav className="hidden text-white text-xl justify-center items-center gap-6 md:flex z-10">
      <a className="hover:opacity-60" href="1">
        About
      </a>
      <a className="hover:opacity-60" href="2">
        Discover
      </a>
      <a className="hover:opacity-60" href="3">
        Get Started
      </a>
    </nav>
  );
}

function MobileNav({ handleMenu, toggleMenu }) {
  return (
    <div
      style={{ transform: !toggleMenu && `translateX(${100}%)` }}
      className="fixed top-0 left-0 w-full h-full bg-[#00000067] z-10 transition duration-500"
    >
      <img
        onClick={handleMenu}
        className="absolute top-10 right-6 w-6"
        src="/images/icon-close-menu.svg"
        alt=""
      />
      <nav className="w-[85%] h-[185px] m-auto mt-24 bg-white rounded-lg shadow-lg text-xl flex flex-col items-start divide-y-2">
        <a className="w-full p-4" href="1">
          About
        </a>
        <a className="w-full p-4" href="2">
          Discover
        </a>
        <a className="w-full p-4" href="3">
          Get Started
        </a>
      </nav>
    </div>
  );
}

export default DesktopNav;

export { MobileNav };
