import React from 'react';

import { FaDownload, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Heropage = () => {
    return (
        <div>
<div className="px-2 py-4 pt-32 flex flex-col justify-center items-center text-center">
  <img
    className="inline-flex object-cover border-4 border-indigo-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 bg-indigo-50 text-indigo-600 h-24 w-24 !h-48 !w-48"
    src="/personal_ds_cox_tour_short.jpg"
    alt=""
  />
  <h1 className="text-2xl text-gray-500 font-bold mt-2">Sourav Chakraborty</h1>
  <h2 className="text-base md:text-xl text-gray-500 font-bold">
    Software Engineer @
    <a
      href=""
      target="_blank"
      className="text-indigo-900 hover:text-indigo-600 font-bold border-b-0 hover:border-b-4 hover:border-b-indigo-300 transition-all mb-2"
    >
      Freelance
    </a>
  </h2>
  <div>
    <p className='text-blue-700'>B.Sc Engr. CSE| CSD| CSSGB</p>
  </div>
    <div className="flex gap-2 mt-5">
            <a href='https://github.com/sourav112' target='_blank' className="font-bold text-blue-700 text-2xl"><FaGithub/></a>
            <a href="https://www.facebook.com/sourav.chakraborty.7399/" target='_blank' className="font-bold text-blue-700 text-2xl"><FaFacebook/></a>
            <a href="https://www.linkedin.com/in/sourav-chakraborty-csd-cssgb-4731126b/" target='_blank' className="font-bold text-blue-700 text-2xl"><FaLinkedin/></a>
            <a href='https://www.youtube.com/@souravchakraborty4995' target='_blank' className="font-bold text-blue-700 text-2xl"><FaYoutube/></a>
            <a href="https://www.instagram.com/" target='_blank' className="font-bold text-blue-700 text-2xl"><FaInstagram/></a>
    </div>
    <div className="flex gap-2 mt-5">
        <a href='/Sourav_DS_CV.pdf'download={true} className="btn btn-info"><FaDownload /> Download CV</a>
    </div>
</div>

        {/**<section class="font-serif">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 content-center items-center justify-center max-w-6xl pt-10 pl-10">
        <div class="w-full py-8">
            <h1 class="text-blue-900 text-7xl font-semibold leading-none tracking-tighter">
            Hi <br/> I'am <span class="text-blue-500"> Sourav, <br/></span> Software Engineer.
            </h1>
            <br/>
            <a href='/Sourav_DS_CV.pdf'download={true} className="btn btn-info"><FaDownload /> Download CV</a>

            <div className="flex gap-2 mt-5">
            <a href='https://github.com/sourav112' target='_blank' className="font-bold text-blue-700 text-2xl"><FaGithub/></a>
            <a href="https://www.facebook.com/sourav.chakraborty.7399/" target='_blank' className="font-bold text-blue-700 text-2xl"><FaFacebook/></a>
            <a href="https://www.linkedin.com/in/sourav-chakraborty-csd-cssgb-4731126b/" target='_blank' className="font-bold text-blue-700 text-2xl"><FaLinkedin/></a>
            <a href='https://www.youtube.com/@souravchakraborty4995' target='_blank' className="font-bold text-blue-700 text-2xl"><FaYoutube/></a>
            <a href="https://www.instagram.com/" target='_blank' className="font-bold text-blue-700 text-2xl"><FaInstagram/></a>
            </div>
        </div>
        <div className="mt-14">
            <img src="/personal_ds_cox_tour_half.jpg" className="rounded-full" />
        </div>
        </div>
        </section> */}
        </div>
        
    );
};

export default Heropage;

