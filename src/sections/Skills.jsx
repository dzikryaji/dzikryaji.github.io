import { useInView, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { skills } from "../constansts";
import Marquee from "../components/Marquee";

const Skills = ({ control }) => {
  const ref = useRef(null)
  const isInView = useInView(ref);
  const [activeTitle, setActiveTitle] = useState(null)

  useEffect(() => {
    if (isInView) {
      control.start("switchColor")
    } else {
      control.start("initial")
    }
  }, [isInView, control])

  return (
    <section id="skills" className="overflow-x-hidden">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-nfl uppercase px-4 lg:px-8"
        variants={{
          initial: {
            color: "#FFFCF8"
          },
          switchColor: {
            color: "white"
          }
        }}
        initial="initial"
        animate={control}>Skills</motion.h1>
      <motion.p
        className="text-md md:text-lg lg:text-xl font-roboto font-semibold px-4 lg:px-8 uppercase"
        variants={{
          initial: {
            color: "#FFFCF8"
          },
          switchColor: {
            color: "white"
          }
        }}
        initial="initial"
        animate={control}>Programming Tools & Language</motion.p>
      <Marquee title={activeTitle} />
      <div ref={ref} className="grid grid-cols-3 lg:grid-cols-5 gap-y-8 px-4 lg:px-36 py-4">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center">
            <img 
            src={skill.image} 
            alt={skill.title} 
            className="w-[45%] grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100" 
            onMouseEnter={() => setActiveTitle(skill.title)} onMouseLeave={() => setActiveTitle('')} />
          </div>
        ))}
      </div>
      <Marquee isReverse={true} title={activeTitle} />
    </section>
  )
}

export default Skills
