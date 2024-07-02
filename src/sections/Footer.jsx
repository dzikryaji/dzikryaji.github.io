import { IconTextFooter, barcode } from "../assets"
import { socialMedia } from "../constansts"

const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex flex-col-reverse lg:flex-row h-screen w-screen -z-10 bg-bone pb-4 pt-8 justify-end ">
      <div className="lg:flex-1 flex justify-center items-end pt-4">
        <img src={barcode} className="pb-4 -rotate-90 lg:rotate-0" />
      </div>
      <div className="flex lg:flex-col lg:flex-[2] justify-center items-center lg:justify-end px-4 pt-4">
        {socialMedia.map((item) => (
          <a key={item.id} href={item.url} target="_blank" className="w-16 h-16 lg:w-24 lg:h-24 scale-100 hover:scale-110 transition-transform">
            {<item.img />}
          </a>
        ))}
      </div>
      <div className="h-full flex items-end lg:flex-[7]">
        <img src={IconTextFooter} className="w-full px-4" />
      </div>
    </footer>
  )
}

export default Footer
