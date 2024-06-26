import { beetle, grow, guitarist, lady, palmeira, woodcraft } from "../assets/images";
import ScrollAnimation from 'react-animate-on-scroll';
const RecentWork = () => {
  return (
  <div>
  <div className="bg-black pb-[16rem]">
  <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
    <div className="pt-[7rem]">
      <p className="text-green-500 text-center">RECENT WORKS</p>
      <h2 className="h2 text-semibold text-white text-center mx-20 md:mx-[18rem]">
      We love what we do, check out some of our latest works
      </h2>
    </div>
    </ScrollAnimation>
    </div> 
    <div className="flex flex-col items-center -mt-[13rem] px-10 pb-[6rem] ">
    <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
      <div className="md:flex" >
      <img src={lady} className="md:w-[50%] h-[80%]"/>
      <img src={woodcraft} className="md:w-[50%] "/>
      </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
    <div className="md:flex">
      <img src={beetle} className="md:w-[50%] md:-mt-[20%] "/>
      <img src={grow} className="md:w-[50%] "/>
    </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
    <div className="md:flex">
      <img src={guitarist} className="md:w-[50%]  md:-mt-[20%]"/>
      <img src={palmeira} className="md:w-[50%] "/>
    </div>
    </ScrollAnimation>
    </div>
  
  </div> );
}
 
export default RecentWork;