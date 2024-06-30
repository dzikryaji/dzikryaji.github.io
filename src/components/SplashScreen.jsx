import { motion } from "framer-motion"
import { IconText } from "../assets"

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed z-[100] bg-bone flex justify-center items-center top-0 left-0 w-screen h-screen"
      initial={{
        opacity: 1
      }}
      animate={{
        display: "none",
        opacity: 0
      }}
      transition={{
        delay: 2,
        duration: 0.5
      }}>
        <div className="w-1/2 min-w-[12rem]">
          <IconText />
        </div>
    </motion.div>
  )
}

export default SplashScreen
