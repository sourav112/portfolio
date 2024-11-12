import React from 'react';
import { Helmet } from 'react-helmet';

const Skillpage = () => {
    return (
        <div>
            <Helmet>
                <title>Sourav | Skills</title>
            </Helmet>
            

  <div className="relative p-4 pt-24 max-w-sm mx-auto">
  <div className="flex mb-2 items-center justify-between">
    <div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700">
        MERN Stack
      </span>
    </div>
    <div className="text-right">
      <span className="text-xs font-semibold inline-block text-teal-600">
        80%
      </span>
    </div>
  </div>
  <div className="flex rounded-full h-2 bg-gray-200">
    <div style={{ width: "80%" }} className="rounded-full bg-teal-500" />
  </div>
</div>
<div className="relative p-4 mt-4 max-w-sm mx-auto">
  <div className="flex mb-2 items-center justify-between">
    <div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700">
        Flutter
      </span>
    </div>
    <div className="text-right">
      <span className="text-xs font-semibold inline-block text-teal-600">
        60%
      </span>
    </div>
  </div>
  <div className="flex rounded-full h-2 bg-gray-200">
    <div style={{ width: "60%" }} className="rounded-full bg-teal-500" />
  </div>
</div>
<div className="relative p-4 mt-4 max-w-sm mx-auto">
  <div className="flex mb-2 items-center justify-between">
    <div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700">
        Tailwind CSS
      </span>
    </div>
    <div className="text-right">
      <span className="text-xs font-semibold inline-block text-teal-600">
        90%
      </span>
    </div>
  </div>
  <div className="flex rounded-full h-2 bg-gray-200">
    <div style={{ width: "90%" }} className="rounded-full bg-teal-500" />
  </div>
</div>
<div className="relative p-4 mt-4 max-w-sm mx-auto">
  <div className="flex mb-2 items-center justify-between">
    <div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700">
        NEXT JS
      </span>
    </div>
    <div className="text-right">
      <span className="text-xs font-semibold inline-block text-teal-600">
        70%
      </span>
    </div>
  </div>
  <div className="flex rounded-full h-2 bg-gray-200">
    <div style={{ width: "70%" }} className="rounded-full bg-teal-500" />
  </div>
</div>
<div className="relative p-4 mt-4 max-w-sm mx-auto">
  <div className="flex mb-2 items-center justify-between">
    <div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700">
        Firebase
      </span>
    </div>
    <div className="text-right">
      <span className="text-xs font-semibold inline-block text-teal-600">
        90%
      </span>
    </div>
  </div>
  <div className="flex rounded-full h-2 bg-gray-200">
    <div style={{ width: "90%" }} className="rounded-full bg-teal-500" />
  </div>
</div>

        </div>
    );
};

export default Skillpage;