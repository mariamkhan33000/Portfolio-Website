import { useState } from 'react';
import pic from '../../public/mohsin.jpg'
import { IoMenuSharp, IoClose  } from "react-icons/io5";

const Navbar = () => {
     const [menu, setMenu] = useState(false);
     const navItems = [{
        id: 1,
        text: "Home"
     },
     {
        id: 2,
        text : "About"
     },
     {
        id: 3,
        text: "Portfolio"
     },
     {
        id: 4,
        text: "Experiance"
     },
     {
        id: 5,
        text: "Contact"
     }

    ]
  return (
    <>
     <div className="max-w-screen-2xl  container max-auto px-4 md:px-20 shadow-md h-16 fixed top-0 right-0 left-0">
     <div className='flex justify-between h-16 items-center'>
        <div className='flex space-x-2'>
            <img className='h-12 w-12 rounded-full cursor-pointer' src={pic} alt="" />
            <h1 className='font-semibold text-xl'>Vic<span className="text-green-600 text-2xl">KY</span> <p className='text-sm'>Web Developer</p> </h1>
        </div>
        {/* Desktop Navbar */}
        <div>
            <ul className='hidden md:flex space-x-8'>
                {navItems.map(({ id, text }) => (
                    <li  className='hover:scale-105 duration-200 cursor-pointer' key={id}>{text}</li>
                ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className='md:hidden' >
                { menu? <IoMenuSharp size={24} /> : <IoClose size={24} />}
            </div>
        </div>
        </div>
        {/* mobile Navbar */}
        {menu && (
            <div>
            <ul className='md:hidden flex flex-col items-center justify-center h-screen space-y-3'>
            {navItems.map(({ id, text }) => (
                    <li className='hover:scale-105 duration-200 cursor-pointer font-semibold text-xl' key={id}>{text}</li>
                ))}
                </ul>
            </div>
        )}
    </div> 
    </>
  )
}

export default Navbar
