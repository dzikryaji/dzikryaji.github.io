import { socialMedia } from "../constansts"
import MotionMedia from "../components/MotionMedia"
import Reveal from "../components/Reveal"
const Profile = () => {
  return (
    <section id='profile' className='flex max-w-full lg:ps-8 ps-4 gap-12 pb-8'>
      <div className="flex-1">
        <Reveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-nfl uppercase">
            Profile</h1>
        </Reveal>
        <Reveal>
          <p className="text-md md:text-lg lg:text-xl font-roboto font-light uppercase">
            My name is Dzikry Aji Santoso. I am an Information Systems Student at Brawijaya University, specializing in Android and Front End development. I have hands-on experience with Kotlin, Firebase, Room, and Retrofit in MVVM Architecture for Android development. Additionally, I am skilled in front-end technologies such as React and Tailwind CSS.
          </p>
        </Reveal>
        <Reveal>
          <div className="flex gap-8">
            {socialMedia.map((item) => (
              <a key={item.id} href={item.url} target="_blank" className="w-16 h-16 scale-100 hover:scale-110 transition-transform">
                {<item.img />}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
      <MotionMedia />
    </section>
  )
}

export default Profile
