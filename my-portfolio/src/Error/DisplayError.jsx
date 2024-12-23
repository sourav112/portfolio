import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
    <div className="grid place-items-center shadow-xl p-6 rounded-lg">
      
    
      <p className="text-red-400 mt-16 text-5xl font-bold">
        {error.statusText || error.message}
      </p>
      <h4 className="text-3xl font-semibold mt-10">
        {" "}
        Please Go to &nbsp;
        <Link to="/">
          <button className="btn btn-primary ">
            Home
          </button>
        </Link>{" "}
      </h4>
    </div>
    );
};

export default DisplayError;