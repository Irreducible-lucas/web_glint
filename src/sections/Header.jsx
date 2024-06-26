import React from 'react';
import { Drawer } from "flowbite-react";
import { useState } from "react";
import { logo } from "../assets/images";
import { downarrow, hamburger } from "../assets/icons";
import { navigation, socials } from "../constant";
import background1 from "../assets/images/background1.jpg"; // Import the background image
import 'animate.css';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return ( 
    <div className=" pt-6 mx-auto px-6 md:px-10 lg:px-15" style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '2rem' }}>
      <div className='flex justify-between md:pb-20'>
      <div>
        <a href="./">
          <img src={logo} alt="Logo" width={160} height={160}/>   
        </a>
      </div>

      <div className='fixed  right-5'>
        <>
          <div>
            <button onClick={() => setIsOpen(true)}>
              <div className="flex items-center justify-center">
                <h6 className="text-green-700 fw-bold me-5 hidden lg:block">MENU</h6>
                <div className="w-[30] h-[30] bg-white p-2 rounded-lg">
                  <img src={hamburger} alt="Menu" width={20} height={20} />
                </div>
              </div>
            </button>
          </div>
          <Drawer open={isOpen} onClose={handleClose} position="right" className="w-[45%] md:w-[20%] lg:w-[20%] bg-black">
            <div className="flex text-">
            <Drawer.Header title="" className='text-green-500' titleIcon={() => <></>} />
            <p className="text-green-800">Navigation</p>
              
            </div>
            <Drawer.Items>
              <ul className="mt-10">
                {navigation.map((item) => (
                  <li key={item.id} className="mt-5">
                    <a href={item.url} className="text-white m-3 p-2">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-white mt-[6rem] fw-light">Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>
            </Drawer.Items>
          </Drawer>
        </>
      </div>
      </div>
      <div className='text-white '>
        <div className='flex justify-between mt-[6rem]'>
          <div className='mx-6 lg:ps-[5.5rem] lg:pe-20 animate__animated animate__slideInUp animate__slow'>
        <h3 className='text-lg text-center text-slate-500 md:text-left mb-3'>WELCOME TO GLINT</h3>
        <h1 className='h1 text-center md:text-left md:max-w-xl lg:max-w-3xl '>We are a creative group of people who design influential brands and digital experiences.</h1>
        </div>
        <div className='mt-10 hidden md:block' >
          {socials.map((item) =>(
            <li key={item.id} className='list-none w-[30] h-[30] rounded-full border-2 p-2 ' style={{marginBottom: '20px'}}>
              <a href={item.url} >
                <img src={item.iconUrl} width={30} height={30} />
              </a>
            </li>
          ))}
        </div>
        
        </div>

        <div className="flex md:flex-row flex-col md:gap-5 gap-3 mt-[4.5rem] lg:ps-[6rem]">
      <button className='border-2 px-[4rem] py-[10px] '>START A PROJECT</button>
        <button className='border-2 px-[4rem] py-[10px]'>MORE ABOUT US</button>
        </div>

      </div>
      <div className='flex gap-5 justify-end item-center mt-[2rem] md:me-10 me-5 -mb-8'>
        <div className='flex items-center gap-5 -mt-[4.2rem]' >
          <a href="#glint">
          <img src={downarrow} width={15} height={15}   />
        <p className='text-white'>SCROLL DOWN</p>
          </a>
       
        </div>
        <div className='w-1 h-20  bg-green-500 item-center'></div>
     </div>
        </div>
    

  );
}
 
export default Header;

