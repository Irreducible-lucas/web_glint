import { arrow, logo } from "../assets/images";

const Footer = () => {
  return ( 
    <div className="bg-black text-slate-400 py-[8rem] relative">
    <div className="flex flex-col md:flex-row px-10 md:px-20 md:gap-20">
    <div className="w-[100%]">
      <img src={logo} width={80} height={80} className="mb-10 hidden md:block" />
      <p className="mb-10 leading-loose md:max-w-sd">Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut. </p>
    </div>
    <div className="w-[100%] ">
      <h6 className="text-white font-bold mb-10">Get Notified</h6>
      <p className="leading-loose mb-8 md:max-w-sd">Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro</p>
      <div className="md:hidden">
      <input type="text" placeholder="Email Address" className="flex w-full bg-transparent text-center border-0 outline-0 p-2 mb-5"/>
      <button className="w-full bg-green-500 text-white px-10 text-center py-3 rounded-md mb-[8rem] font-bold tracking-wider">SUBSCRIBE</button>
      </div>
      <div className="flex items-center justify-center w-full hidden md:block">
        <input type="text" placeholder="Email Address" className="py-3 px-12 bg-transparent outline-0 border-0" />
        <button className="py-3 px-10 bg-green-500 text-center font-bold bolder-0 outline-0 text-white ">SUBSCRIBE</button>
      </div>
    </div>
    </div>
    <div className="text-center flex flex-col md:flex-row md:items-center md:justify-center md:gap-5">
    <p className="mb-3 md:mb-0">© Copyright Glint 2022</p>
    <p>Site Template by 
      <span className="text-white"> Colorlib</span>
      </p>
    </div>
    <div className= "fixed w-10 h-10 bg-white  bottom-0 right-0 ">
      <a href="/">
      <img src={arrow} width={40} height={40}  />
      </a>
     
    </div>
    </div>
   );
}
 
export default Footer;