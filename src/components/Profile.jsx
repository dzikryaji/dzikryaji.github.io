import { socialMedia } from "../constansts"
import MotionMedia from "./MotionMedia"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
const Profile = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const divRef = useRef(null);

  const h1IsInView = useInView(h1Ref, { once: true });
  const pIsInView = useInView(pRef, { once: true });
  const divIsInView = useInView(divRef, { once: true });

  return (
    <section id='profile' className='flex max-w-full lg:ps-8 ps-4 gap-12 pb-8'>
      <div className="flex-1">
        <motion.h1
          ref={h1Ref}
          className="text-4xl md:text-5xl lg:text-6xl font-nfl uppercase transition-all duration-500"
          style={{
            translateY: h1IsInView ? 0 : 100,
            opacity: h1IsInView ? 1 : 0
          }}
          transition={{
            duration: 0.5
          }}
        >Profile</motion.h1>
        <motion.p
          ref={pRef}
          className="text-md md:text-lg lg:text-xl font-roboto font-light uppercase mt-4 transition-all duration-500"
          style={{
            translateY: pIsInView ? 0 : 100,
            opacity: pIsInView ? 1 : 0
          }}>
          Information Systems Student at Brawijaya University, specializing in Android and Front End development. I have hands-on experience with Kotlin, Firebase, Room, and Retrofit in MVVM Architecture for Android development. Additionally, I am skilled in front-end technologies such as React and Tailwind CSS.
        </motion.p>
        <motion.div
          ref={divRef}
          className="flex mt-4 gap-8 transition-all duration-500"
          style={{
            translateY: divIsInView ? 0 : 100,
            opacity: divIsInView ? 1 : 0
          }}>
          {socialMedia.map((item) => (
            <a key={item.id} href={item.url} target="_blank" className="w-16 h-16 scale-100 hover:scale-110 transition-transform">
              <img src={item.img} alt={item.title} />
            </a>
          ))}
        </motion.div>
      </div>
      <MotionMedia />
    </section>
  )
}

export default Profile
