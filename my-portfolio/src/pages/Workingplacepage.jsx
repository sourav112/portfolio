import React from 'react';

const Workingplacepage = () => {
    return (
        <div>
            <div className="pt-24">
                <div className="container">
                    <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
                    <div className="flex md:contents">
                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-green-500 pointer-events-none" />
                        </div>
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                            <i className="fas fa-check-circle text-white" />
                        </div>
                        </div>
                        <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                        <h3 className="font-semibold text-lg mb-1">DoICT, Cox'sbazar Sadar, Cox'sbazar</h3>
                        <p className="leading-tight text-justify">
                             (27.02.2022 - Till)
                        </p>
                        </div>
                    </div>
                    <div className="flex md:contents">
                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-500 pointer-events-none" />
                        </div>
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow text-center">
                            <i className="fas fa-check-circle text-white" />
                        </div>
                        </div>
                        <div className="bg-gray-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                        <h3 className="font-semibold text-lg mb-1">DoICT, Rowangchari, Bandarban</h3>
                        <p className="leading-tight text-justify w-full">
                             (19.06.2019 - 26.02.2022)
                        </p>
                        </div>
                    </div>
                   
                    
                   
                    </div>
                </div>
                </div>

        </div>
    );
};

export default Workingplacepage;