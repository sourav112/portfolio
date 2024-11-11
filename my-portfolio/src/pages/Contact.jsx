import React from 'react';
import { Helmet } from 'react-helmet';
import { FaEnvelope, FaHome, FaMailBulk, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Sourav | Contact</title>
            </Helmet>
            
<div class="max-w-screen-xl mx-auto my-7 lg:px-20 mt-20" id="contact">
  <form action="" method="post">
    <div class="w-full p-8 my-4 mr-auto shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl">
      <div class="flex">
        <h1 class="text-5xl text-[#A85168] font-bold ">Hire Me</h1>
      </div>
      <div class="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
        <input class="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:border-outline" type="text" placeholder="First Name" name="firstName" autocomplete="name" />
        <input class="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Last Name" name="lastName" autocomplete="family-name" />
        <input class="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name="email" autocomplete="email" />
        <input class="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline" type="tel" placeholder="Phone" name="phone" autocomplete="tel" />
      </div>
      <div class="my-4">
        <textarea placeholder="Message" 
        class="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline" 
        name="message" autocomplete="message"></textarea>
      </div>
      <div class="w-1/2 my-2 lg:w-1/4">
        <button type="submit" 
        class="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-[#A12347] rounded rounded-xl hover:bg-blue-700-lg focus:outline-none focus:shadow-outline">
                        Send Message
                    </button>
      </div>
    </div>
  </form>
  <div class="w-full px-8 py-12 ml-auto bg-[#1B6485] lg:-mt-96 lg:w-2/6 rounded-2xl">
    <div class="flex flex-col text-white">
      <div class="flex w-2/3 my-4 lg:w-1/2">
        <FaHome class="pt-2 pr-2 h-7 w-7 " />
        <div>
          <h2 class="text-2xl">Office</h2>
          <p class="text-gray-200" >Chittagong, Bangladesh</p>
        </div>
      </div>
      <div class="flex w-2/3 my-4 lg:w-1/2">
      <FaPhone class="pt-2 pr-2 h-7 w-7 " />
        <div>
          <h2 class="text-2xl">Call</h2>
          <p class="text-gray-200" >Tel:+880-18-12-37-55-34</p>
        </div>
      </div>
      <div class="flex w-2/3 my-4 lg:w-1/2">
      <FaEnvelope class="pt-2 pr-2 h-7 w-7 " />
        <div>
          <h2 class="text-2xl">Email</h2>
          <p class="text-gray-200" >Email:pdoict</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Contact;