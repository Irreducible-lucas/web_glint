import { line2 } from "../assets/images";
import { business } from "../constant";
import ScrollAnimation from 'react-animate-on-scroll';
const WhatWeDo = () => {
  return (
    
     <div >
      <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
    <div className="flex items-center flex-col mt-[5rem]">
    <h6 className="text-green-500 h6 tracking-widest">WHAT WE DO</h6>
    <h1 className="h1 text-center px-20">We’ve got everything you need to launch and grow your business</h1>
    <img src={line2} width={400} height={30} className="-mt-[9.8rem] -mb-[10rem]"  />
    </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
    <div className="grid grid-cols-1 md:grid-cols-2 mb-[5rem]">
      {business.map((item) => (
        <div key={item.id} className="px-10 md:px-20 flex items-center flex-col md:items-start">
          <div className="flex flex-col md:flex-row items-center gap-5">     
            <img src={item.icon} width={50} height={40} className="md:-mb-4"/>
          <h2 className="h5 font-semibold ">{item.title}</h2>
          </div>
          <p className=" text-center text-slate-600 mt-3 mb-8 md:text-start md:ms-[5rem]">{item.description}</p>
           </div>
      ))}
    </div>
    </ScrollAnimation>
   
   






  </div> );
}
 
export default WhatWeDo;