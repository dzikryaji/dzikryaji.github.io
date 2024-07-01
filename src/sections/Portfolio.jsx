import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { portfolio } from "../constansts";
import { BrowserView, MobileView } from "react-device-detect";

const Portfolio = ({control}) => {
  return (
    <>
      <BrowserView>
        <BrowserPortfolio />
      </BrowserView>
      <MobileView>
        <MobilePortfolio control={control} />
      </MobileView>
    </>
  );
};

const MobilePortfolio = ({control}) => {
  return (
    <section id="#portfolio" className="px-4 mt-[20vh] mb-8">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-nfl uppercase transition-colors"
        variants={{
          initial: {
            color: "black"
          },
          switchColor: {
            color: "#101110"
          }
        }}
        initial="initial"
        animate={control}>Portfolio</motion.h1>
      <div className="flex flex-col mt-4 gap-4">
        {portfolio.map((card) => (
          <a
          target="_blank"
            key={card.id}
            href={card.url}
            className={`relative flex h-[33vh] lg:h-[65vh] aspect-video border border-black overflow-hidden`}
          >
            <img src={card.img} alt={card.title} className="flex-1 grayscale opacity-60 duration-500 hover:grayscale-0 hover:opacity-100 transition" />
          </a>
        ))}
      </div>
    </section>
  )
}

const BrowserPortfolio = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
    <section id="#portfolio" ref={targetRef} className="relative h-[300vh] mt-[150vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="border-y border-black">
          <div className="flex items-center justify-center px-4 lg:px-8 h-[33vh] lg:h-[65vh] absolute z-10 border-r border-black bg-bone">
            <h1 className="text-lg md:text-xl lg:text-2xl font-nfl uppercase text-center ">Portfolio</h1>
          </div>
          <motion.div style={{ x }} className="flex ps-[7.6rem] lg:ps-[11.1rem]">
            {portfolio.map((card) => (
              <a
                target="_blank"
                key={card.id}
                href={card.url}
                className={`relative flex h-[33vh] lg:h-[65vh] aspect-video border-black ${portfolio.length - 1 == card.id ? 'border-x' : 'border-l'} overflow-hidden`}
              >
                <img src={card.img} alt={card.title} className="flex-1 grayscale opacity-60 duration-500 hover:grayscale-0 hover:opacity-100 transition" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Portfolio;