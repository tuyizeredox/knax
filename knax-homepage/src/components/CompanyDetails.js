import React from 'react';
import { FaLaptop, FaDesktop, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const CompanyDetails = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white p-6">
            <div className="max-w-lg w-full bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-90 backdrop-blur-xl shadow-2xl rounded-2xl p-8 transform transition duration-500 hover:scale-105">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">Knax Technology Ltd</h2>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">@knax_250Technology</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg">High-quality computers and accessories for all your needs.</p>

                    <div className="flex justify-center gap-6 my-6 text-gray-700 dark:text-gray-300 text-lg">
                        <div className="flex flex-col items-center space-y-2 hover:text-blue-500 transition">
                            <FaLaptop className="text-blue-500 text-2xl" />
                            <span>Laptops</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2 hover:text-green-500 transition">
                            <FaDesktop className="text-green-500 text-2xl" />
                            <span>Desktops</span>
                        </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 font-medium text-lg mt-6">Manager: <span className="font-semibold">Directeur Général</span></p>

                    <div className="mt-5 space-y-4">
                        <p className="flex items-center justify-center space-x-2 text-lg hover:text-blue-500 transition">
                            <FaPhone className="text-blue-500 text-xl" />
                            <span>0782562906</span>
                        </p>
                        <p className="flex items-center justify-center space-x-2 text-lg hover:text-red-500 transition">
                            <FaMapMarkerAlt className="text-red-500 text-xl" />
                            <span>Makuza Peace Plaza, Nyarugenge, Kigali, Rwanda</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDetails;
