import React from 'react';
import { FaLaptop, FaDesktop, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const CompanyDetails = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6">
            <div className="max-w-xl w-full bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 transform transition duration-500 hover:scale-105">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-blue-400 mb-3 animate-fade-in">Knax Technology Ltd</h2>
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">@knax_250Technology</h3>
                    <p className="mt-2 text-gray-400 text-lg">High-quality computers and accessories for all your needs.</p>
                    
                    <div className="flex justify-center space-x-6 my-6 text-gray-300 text-lg">
                        <div className="flex items-center space-x-2 hover:text-blue-300 transition">
                            <FaLaptop className="text-blue-400 text-xl" />
                            <span>Laptops</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:text-green-300 transition">
                            <FaDesktop className="text-green-400 text-xl" />
                            <span>Desktops</span>
                        </div>
                    </div>
                    
                    <p className="text-gray-300 font-medium text-lg">Manager: Directeur Général</p>
                    <p className="flex items-center justify-center space-x-2 mt-4 text-lg hover:text-blue-400 transition">
                        <FaPhone className="text-blue-400 text-xl" />
                        <span>0782562906</span>
                    </p>
                    <p className="flex items-center justify-center space-x-2 mt-2 text-lg hover:text-red-400 transition">
                        <FaMapMarkerAlt className="text-red-400 text-xl" />
                        <span>Makuza Peace Plaza, Nyarugenge, Kigali, Rwanda</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CompanyDetails;
