import React from 'react';
import { Helmet } from 'react-helmet';

const about = () => {
    return (
        <div>
             <Helmet>
                <title>Sourav | About</title>
            </Helmet>
  <div className="container mx-auto px-8 pt-28">
  <div className="relative wrap overflow-hidden">
    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2" />
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12" />
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">ICT Division</h3>
        <p className="text-gray-700 leading-tight">
        Assistant Programmer (19th  June 2019 to Till ) <br/>
        Responsibilities : 
          To maintain various types of project using MERN & Next JS.
          Prepare complex report for the end user.

        </p>
      </div>
    </div>
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12" />
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">DataSoft Systems Bangladesh Limited</h3>
        <p className="text-gray-700 leading-tight">
        Software Engineer (1st January 2017 to 18th June 2019 ) <br/>
        Responsibilities : 
          To update the existing system of Chittagong port CTMS project by using Codeigniter & Laravel framework.
          Prepare complex report for the end user.
          Using java for billing software.

        </p>
      </div>
    </div>
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12" />
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Youngone Group</h3>
        <p className="text-gray-700 leading-tight">
        Team Member (14th January 2015 to 14th January 2017) <br/>
        Responsibilities:
          Architected, designed and developed the system in 3 tiers.
          Developed the front end using HTML,CSS,ASP.NET MVC5
          Developed DLL for the security system using C#. 
          Used XML to store and display client data. 
          Developed reports using Crystal Reports.Net, Report Server.
          Working with Timecard machine like ZKsoft,HTA etc. 
        </p>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default about;