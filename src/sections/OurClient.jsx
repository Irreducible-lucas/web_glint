import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { owner, partners } from "../constant";
import { line } from "../assets/images";

const OurClient = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return ( 
  <div className="bg-[#e6e6e6] py-[8rem] text-center px-10">
    <h6 className="h6 font-bold text-green-600 tracking-widest">OUR CLIENTS</h6>
    <h2 className="h2 font-semibold">
    Glint has been honored to partner up with these clients
    </h2>
    <div className="mt-20 px-8"
  style={{ paddingBottom: '30px', position: 'relative' }}
>
      <Carousel
      responsive={responsive}
      removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
      additionalTransfrom={0}
      autoPlay
      autoPlaySpeed={3000}
      infinite
      renderDotsOutside
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
      >
        {partners.map((item) => (
          <div key={item.id}>
            <img src={item.iconUrl} width={120} height={120} className="hover:bg-red"/>
          </div>
        ))}
     </Carousel>
    </div>
    <img src={line} className="-mt-[9.5rem] -mb-[9rem]  md:-mt-[20rem]  md:-mb-[20rem]  lg:-mt-[33rem] lg:-mb-[33rem]" />


    <div className="mt-20 px-8 mb-20"
  style={{ paddingBottom: '30px', position: 'relative' }}
>
      <Carousel
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 1,
          
         
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
         
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1,
        
        }
      }}
      removeArrowOnDeviceType={['tablet', 'mobile',]}
      additionalTransfrom={0}
      renderDotsOutside
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
      >
        {owner.map((item)=>(
          <div key={item.id}>
            <h6 className="lg:px-[10rem] leading-10 text-xl md:text-2xl mb-[5rem] md:leading-relaxed text-[#737373]">{item.says}</h6>
            <img src={item.image} width={50} height={50} className="rounded-full mx-auto mb-3"  />
            <p className="mb-3 font-bold h6">{item.name}</p>
            <p>{item.position}</p>

          </div>
        ))}
     </Carousel>
    </div>
    <div className="flex items-center justify-center -mb-[8.1rem]">
      <div className="w-1 h-20 bg-green-500"></div>
    </div>
  
  </div> 
  
);
}
 
export default OurClient;