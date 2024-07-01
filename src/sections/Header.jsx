import { enablePageScroll, disablePageScroll } from "scroll-lock";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { navigation } from "../constansts";
import { IconText } from "../assets";
import MenuSvg from "../assets/svg/MenuSvg";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      setOpenNavigation(false);
    } else {
      setHidden(false);
    }
  });

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full z-50 border-b border-inherit bg-inherit"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <div className="flex-1">
            <a className="block w-[12rem]" href="#home" onClick={handleClick}>
              <IconText />
            </a>
          </div>

          <nav className={`hidden lg:flex lg:mx-auto lg:bg-transparent`}>
            <div className="flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className="block relative text-2xl lg:text-xl uppercase font-medium font-roboto transition-colors hover:text-gray-500 px-6 py-6 md:py-8 lg:-mr-0.25 lg:leading-5 lg:hover:text-n-1 xl:px-12"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>

          <div onClick={toggleNavigation} className="ml-auto lg:hidden">
            <MenuSvg openNavigation={openNavigation} />
          </div>
        </div>
      </motion.div>
      <nav className={`${openNavigation ? 'flex bg-inherit' : 'hidden'} fixed top-[4.2rem] left-0 right-0 bottom-0 z-50`}>
        <div className="flex flex-col items-center justify-center m-auto lg:flex-row">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={handleClick}
              className="block text-2xl lg:text-xl uppercase font-medium font-roboto transition-colors hover:text-gray-500 px-6 py-6 md:py-8 lg:-mr-0.25 lg:leading-5 lg:hover:text-n-1 xl:px-12"
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Header;
