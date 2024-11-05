import { FaSquareFacebook, FaYoutube, FaLinkedin, FaSquareInstagram, FaSquareWhatsapp , FaJenkins, FaDocker   } from "react-icons/fa6";
import { SiKubernetes, SiTerraform, SiNextdotjs   } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from '../../public/mohsin.jpg'


const Home = () => {
  return (
    <>
      <div className=" max-w-screen-2xl  container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
            {/* Left-Side */}
        <div className="md:w-1/2 mt-12 md:mt-24  space-y-2 order-2 md:order-1">
        <span className="text-xl">Welcome In My feed</span>
        <div className="flex space-x-1 text-2xl md:text-4xl">
        <h1>Hello, I am a </h1>
        {/* <span className="text-red-700">Developer</span> */}
        <ReactTyped
          className="text-red-700"
          strings={["Developer", "DevOps Engineer", "Programmer", "Coder", "Site Reliability Engineer (SRE)"]}
          typeSpeed={40}
          backSpeed={50}
          loop= {true}
        />
        </div>
        <br />
        <p className="text-sm md:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est expedita quisquam ut? Provident iste voluptates placeat repudiandae id cum alias quaerat vel quam, eius porro consectetur officiis tempora illo.</p>
        <br />
        {/* Social Media Icons */}
        <div className="flex flex-col md:flex-row justify-between  items-center space-y-6 md:space-y-0">
        <div className="space-y-2">
            <h1 className="font-bold">Available on</h1>
            <div className=" flex space-x-2">
              <ul>
                <li><FaSquareFacebook className="text-2xl cursor-pointer hover:scale-110 duration-200  rounded-full border-[2px]"/></li>
                <li><FaYoutube className="text-2xl cursor-pointer hover:scale-110 duration-200  rounded-full border-[2px]"/></li>
                <li><FaLinkedin className="text-2xl cursor-pointer hover:scale-110 duration-200  rounded-full border-[2px]"/></li>
                <li><FaSquareInstagram className="text-2xl cursor-pointer hover:scale-110 duration-200  rounded-full border-[2px]"/></li>
                <li><FaSquareWhatsapp className="text-2xl cursor-pointer hover:scale-110 duration-200  rounded-full border-[2px]"/></li>
              </ul>
            </div>
        </div>

        <div className="space-y-2">
            <h1 className="font-bold">Currently Working On</h1>
            <div className=" flex space-x-2">
            <FaJenkins className="text-2xl cursor-pointer hover:scale-110 duration-200  rounded-full border-[2px]"/>
            <FaDocker className="text-2xl cursor-pointer hover:scale-110 duration-200  rounded-full border-[2px]"/>
            <SiKubernetes className="text-2xl cursor-pointer hover:scale-110 duration-200  rounded-full border-[2px]"/>
            <SiTerraform className="text-2xl cursor-pointer hover:scale-110 duration-200  rounded-full border-[2px]"/>
            <SiNextdotjs className="text-2xl cursor-pointer hover:scale-110 duration-200  rounded-full border-[2px]" />
            </div>
        </div>
        </div>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
        <img src={ pic } className="rounded-full w-[400px] h-[400px]" alt="" />
        </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Home
