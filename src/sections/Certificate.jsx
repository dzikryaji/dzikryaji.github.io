import { useEffect, useState } from "react"
import { certificates } from "../constansts"
import { motion} from "framer-motion"

const Certificate = () => {
  return (
    <section id="certificate" className="mt-56 flex flex-col lg:flex-row justify-center items-center lg:border border-black mb-[100vh]">
      <h1 className="text-3xl font-nfl uppercase px-4 lg:px-8 mb-4 lg:mb-0">Certificate</h1>

      <div className="flex flex-col flex-1">
        {certificates.map((item) => (
          <CertificateItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

const CertificateItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLeave, setIsLeave] = useState(false);

  useEffect(() => {
    if (isHovered) {
      setControl('hovered');
    } else if (isLeave) {
      setControl('leave');
    } else {
      setControl('initial');
    }
  }, [isHovered, isLeave]);

  const [control, setControl] = useState('initial');

  return (
    <div
    onMouseEnter={() => {
      setIsLeave(false);
      setIsHovered(true);
    }}
    onMouseLeave={() => {
      setIsHovered(false);
      setIsLeave(true);
      setTimeout(()=>{ setIsLeave(false) }, 250)
    }}
      className={`group relative flex border-black -mt-[1px] w-full border ${certificates.length - 1 == item.id ? 'lg:border-b-0' : ''}`} key={item.id}>
      <div className="flex justify-center items-center px-8 py-4 border- border-black group-hover:text-white transition-all duration-500 relative z-10">
        <h3 className="text-md md:text-lg lg:text-xl font-roboto font-bold">{item.publisher}</h3>
      </div>
      <a
        target="_blank"
        href={item.url}
        className="my-auto flex-1 py-5">
        <p className="font-roboto font-medium text-md md:text-lg lg:text-xl px-4 group-hover:text-white transition-all duration-300 relative z-10">
          {item.title}
        </p>
      </a>
      <motion.div
        variants={{
          initial: {
            left: 0,
            right: '100%',
            transition: { duration: 0 }
          },
          hovered: {
            right: 0,
            transition: { duration: 0.3 }
          },
          leave: {
            left: '100%',
            right: 0,
            transition: { duration: 0.3 }
          }
        }}
        animate={control}
        className="absolute bg-black h-full top-0 z-0" />
    </div>
  )
}

export default Certificate
