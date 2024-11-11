import React from 'react';

import { FaDownload, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Heropage = () => {
    return (
        <div>
        <section class="font-serif">
        <div class="flex sm:flex-col md:flex-row items-center justify-center max-w-6xl px-6 py-6 mx-auto">
        <div class="w-full  md:w-2/3 py-8">
            <h1 class="text-blue-900 text-7xl font-semibold leading-none tracking-tighter">
            Hi <br/> I'am <span class="text-blue-500"> Sourav, <br/></span> A Software Engineer.
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
        <div className="ml-5 mt-14">
            <img src="/personal_ds_cox_tour_half.jpg" className="rounded-full" />
        </div>
        </div>
        </section>
        </div>
    );
};

export default Heropage;