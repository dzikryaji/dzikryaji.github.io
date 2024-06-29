import { motion } from "framer-motion"
import dzkry from "../assets/dzkry.svg"

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed z-[100] bg-[#FFFCF8] flex justify-center items-center top-0 left-0 w-screen h-screen"
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
      <img src={dzkry} alt="Header Icon" className="w-1/2 min-w-[12rem]"/>
    </motion.div>
  )
}

export default SplashScreen
