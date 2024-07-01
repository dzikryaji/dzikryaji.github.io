import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { me, ArrowIcon } from "../assets";
import { ReactTyped } from "react-typed";
import { isMobile } from "react-device-detect";

const Home = () => {
  const { scrollY } = useScroll();
  const x = useTransform(useSpring(scrollY), [0, 500], [0, 500]);

  const name = isMobile ? "Dzikry Aji S" : "Dzikry Aji Santoso";


  return (
    <section className="lg:p-8 p-4 overflow-x-hidden" id="home">
      <motion.h1
        className="text-4xl md:text-7xl lg:text-8xl font-goulong uppercase truncate"
        style={{
          x: x
        }}

      >{name}</motion.h1>

      <div className="flex lg:flex-row flex-col-reverse lg:mt-4 gap-2 lg:gap-4">
        <motion.div className="lg:flex-[2] rounded-lg overflow-clip">
          <img src={me} alt="Profile photo" className="scale-100 hover:scale-105 transition-transform"/>
        </motion.div>
        <div className="lg:flex-[3] flex flex-row lg:flex-col">
          <div className="flex flex-col gap-2 lg:gap-4">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-roboto font-bold uppercase inline">I am a</h1>
            <ReactTyped
              className="text-4xl md:text-7xl lg:text-8xl font-roboto font-bold uppercase inline"
              strings={['Android', 'Front End']}
              typeSpeed={80}
              backSpeed={80}
              loop />
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-roboto font-bold uppercase inline">Developer</h1>
          </div>
          <div className="flex flex-1 items-center lg:items-end">
            <img src={ArrowIcon} alt="Arrow" className="h-20 lg:mt-10 animate-bounce ml-auto lg:ml-0 lg:h-24" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
