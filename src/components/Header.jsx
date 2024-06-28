import { enablePageScroll, disablePageScroll } from "scroll-lock";
import { useState } from "react";
import { navigation } from "../constansts";
import dzkry from "../assets/dzkry.svg"
import MenuSvg from "./MenuSvg";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  }

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  }

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-black`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] flex-1" href="#home">
          <img src={dzkry} alt="Header Icon" />
        </a>

        <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative text-2xl lg:text-xl uppercase text-black font-semibold transition-colors hover:text-gray-500  px-6 py-6 md:py-8 lg:-mr-0.25 lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                {item.title}
              </a>
            ))}

          </div>
        </nav>

        <div onClick={toggleNavigation} className="ml-auto lg:hidden">
          <MenuSvg openNavigation={openNavigation} />
        </div>
      </div>
    </div>
  )
}

export default Header
