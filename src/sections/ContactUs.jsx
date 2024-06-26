import { bubble } from "../assets/images";
import { socials } from "../constant";

const ContactUs = () => {
  return ( <div className=" pt-6 mx-auto px-6 md:px-10 lg:px-15" style={{ backgroundImage: `url(${bubble})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '2rem' }}>
   <div className="flex justify-center items-center -mt-[2rem]">
      <div className="w-1 h-20 bg-green-500 "></div>
    </div>
    <div className="text-white  px-10 md:px-15  ">
      <p className="h6 font-bold text-green-600 tracking-widest text-center mt-10">CONTACT US</p>
      <h6 className="h2 font-semibold text-center">Reach out for a new project or just say hello</h6>

      <div className="flex flex-col lg:flex-row text-white bg-black-400 md:px-10">
        <div className="flex flex-col flex-1">
          <h6 className="h6 text-center mt-[6rem] mb-10 md:mb-[7rem]">SEND US A MESSAGE</h6>
          <input type="text" placeholder="Your Name" className="bg-transparent py-3 rounded-md border-y-[0.2px] border-slate-700 border-dotted outline-0 mb-5"/>
          <input type="email" placeholder="Your Email" className="bg-transparent py-3 rounded-md border-y-[0.2px] border-slate-700 border-dotted outline-0 mb-5" />
          <input type="text" placeholder="Subject" className="bg-transparent py-3 rounded-md border-y-[0.2px] border-slate-700 border-dotted outline-0 mb-5"/>
          <textarea name="message" placeholder="Your Message" rows={10} cols={50} className="bg-transparent py-2 rounded-md border-y-[0.2px] border-slate-700 border-dotted outline-0 mb-10"></textarea>
          <button className="bg-green-500 text-white px-5 py-2 rounded-sm mb-20 ">SUBMIT</button>

        </div>
        <div className="flex flex-col items-center mx-10 bg-black px-5 md:px-10">
        <h6 className="h6 text-center mt-[6rem] mb-10 hidden md:block mb-[5rem]">CONTACT INFO</h6>
          <p className="text-green-500 mb-7 mt-5">Where to Find Us</p>
          <p className="max-w-52 text-center md:text-left leading-loose mb-8 text-slate-400">1600 Amphitheatre Parkway Mountain View, CA 94043 US</p>
          <p className="text-green-500 mb-5">Email Us At</p>
          <p className="mb-3 text-slate-400">contact@glintsite.com</p>
          <p className="mb-9 text-slate-400">info@glintsite.com</p>
          <p className="text-green-500 mb-5">Call Us At</p>
          <p className="mb-2 text-slate-400">Phone: (+63) 555 1212</p>
          <p className="mb-2 text-slate-400">Mobile: (+63) 555 0100</p>
          <p className="mb-9 text-slate-400">Fax: (+63) 555 0101</p>
          <div className="flex flex-row gap-5 mt-8">
          {socials.map((item) =>(
            <div key={item.id}>
              <img src={item.iconUrl} />
              </div>
              ))}
            </div>
        </div>




      </div>
     

     
    </div>
  </div> );
}
 
export default ContactUs;