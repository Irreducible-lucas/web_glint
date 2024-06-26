import { line } from "../assets/images";
import { glint } from "../constant";
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Glint = () => (
  <div className="bg-green-500" id="glint">
    <div className="flex justify-end">
      <div className="w-1 h-20 bg-white md:me-[4.5rem] me-[3.25rem] "></div>
    </div>
    <ScrollAnimation animateIn="animate__slideInUp " animateOnce={true}  >
      <div className="text-center text-white px-5 py-3">
        <h6 className="text-black h6 font-code tracking-widest">HELLO THERE</h6>
        <div className="flex flex-col items-center px-5">
          <h1 className="h1 text-5xl md:text-7xl font-grotesk mt-3 -mb-[8.5rem]">We Are Glint</h1>
          <img src={line} width={400} height={30} className="flex flex-1" alt="line" />
        </div>
        <p className="md:px-[8rem] text-md md:text-xl md:p-2 -mt-[8.5rem]  text-black fw-bold font-sora leading-7 md:-mt-[10.5rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
      </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__slideInUp " animateOnce={true} >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8 pb-40">
        {glint.map((item) => (
          <div key={item.id} className="text-center flex flex-col items-center">
            <h1 className="h1 text-white text-5xl text-semibold">{item.no}</h1>
            <p className="text-lg text-bolder">{item.title}</p>
            {item.design && (
              <img src={item.design} width={300} height={30} className="-mt-[8rem] -mb-[10rem] md:-mt-[8rem] md:-mb-[6rem] md:hidden" />
            )}
            {item.medium && (
              <img src={item.medium} width={15} height={10} className="md:-mt-[6rem] md:-mb-[6rem] md:ms-[30rem] hidden md:block lg:hidden" />
            )}
            {item.large && (
              <img src={item.large} width={15} height={10} className="md:-mt-[6rem] md:-mb-[6rem] md:ms-[20rem] hidden lg:block" />
            )}
          </div>
        ))}
      </div>
    </ScrollAnimation>
  </div>
);

export default Glint;