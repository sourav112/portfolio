import React from 'react';
import { FaBlog, FaBriefcase, FaEnvelope, FaHome, FaTasks, FaUser, FaWindows } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        
  <div class="navbar bg-base-100 fixed top-0 w-full z-20 mt-auto">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li className="text-lg text-blue-700 font-bold"><NavLink to={"/"}><FaHome /> Home </NavLink></li>
        <li className="text-lg text-blue-700 font-bold"><NavLink to={"/about"}><FaUser />About</NavLink></li>
        <li className="text-lg text-blue-700 font-bold"><NavLink to={"/skills"}><FaTasks /> Skills</NavLink></li>
        <li className="text-lg text-blue-700 font-bold"><NavLink to={"/works"}><FaBriefcase /> Work</NavLink></li>
        <li className="text-lg text-blue-700 font-bold"><NavLink to={"/places"}><FaWindows /> Posting</NavLink></li>
       {/**  <li className="text-lg text-blue-700 font-bold"> <NavLink to={"/blog"}><FaBlog /> Blog</NavLink></li> */}
        <li className="text-lg text-blue-700 font-bold"><NavLink to={"/contact"}><FaEnvelope /> Contact</NavLink></li>
        
      </ul>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
        <li className="text-lg text-blue-700 font-bold"><NavLink to={"/"}><FaHome /> Home </NavLink></li>
        <li className="text-lg text-blue-700 font-bold"><NavLink to={"/about"}><FaUser />About</NavLink></li>
        <li className="text-lg text-blue-700 font-bold"><NavLink to={"/skills"}><FaTasks /> Skills</NavLink></li>
        <li className="text-lg text-blue-700 font-bold"><NavLink to={"/works"}><FaBriefcase /> Work</NavLink></li>
        <li className="text-lg text-blue-700 font-bold"><NavLink to={"/places"}><FaWindows /> Posting</NavLink></li>
        {/** <li className="text-lg text-blue-700 font-bold"> <NavLink to={"/blog"}><FaBlog /> Blog</NavLink></li> */}
        <li className="text-lg text-blue-700 font-bold"><NavLink to={"/contact"}><FaEnvelope /> Contact</NavLink></li>
    </ul>
  </div>
  <div class="navbar-end">
  <img src="/personal_ds_cox_tour_short.jpg" className="w-12 rounded-full" />
    <a className="btn btn-ghost text-xl font-bold text-blue-700">
      Sourav Chakraborty
      </a>
    
  </div>
</div>
        </>
    );
};

export default Header;