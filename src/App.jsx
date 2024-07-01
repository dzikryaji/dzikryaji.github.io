import Header from "./sections/Header"
import Home from "./sections/Home"
import Profile from "./sections/Profile"
import SplashScreen from "./components/SplashScreen"
import Skills from "./sections/Skills"
import { motion, useAnimationControls } from "framer-motion"
import Portfolio from "./sections/Portfolio"
const App = () => {
  const control = useAnimationControls();
  return (
    <>
      <SplashScreen />
      <motion.div
        className="pt-[4.75rem] lg:pt-[5.25rem] transition-colors duration-500"
        variants={{
          initial: {
            color: "black",
            borderColor: "black",
            backgroundColor: "#fffcf8"
          },
          switchColor: {
            color: "white",
            borderColor: "white",
            backgroundColor: "#101110"
          }
        }}
        initial="initial"
        animate={control}>
        <Header />
        <Home />
        <Profile />
        <Skills control={control} />
        <Portfolio control={control} />
      </motion.div>
    </>
  )
}

export default App
