import React from 'react';
import { FaLaptop, FaDesktop, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const CompanyDetails = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-xl w-full bg-gray-800 shadow-xl rounded-2xl p-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-blue-400 mb-2">Knax Technology Ltd</h2>
                    <h3 className="text-lg font-semibold text-gray-300">@knax_250Technology</h3>
                    <p className="mt-4 text-gray-400">We provide high-quality computers and accessories</p>
                    
                    <div className="flex justify-center space-x-4 my-6 text-gray-300">
                        <div className="flex items-center space-x-2">
                            <FaLaptop />
                            <span>Laptops</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaDesktop />
                            <span>Desktops</span>
                        </div>
                    </div>
                    
                    <p className="text-gray-300 font-medium">Manager: Directeur Général</p>
                    <p className="flex items-center justify-center space-x-2 mt-2">
                        <FaPhone className="text-blue-400" />
                        <span>0782562906</span>
                    </p>
                    <p className="flex items-center justify-center space-x-2 mt-2">
                        <FaMapMarkerAlt className="text-red-400" />
                        <span>Makuza Peace Plaza, Nyarugenge, Kigali, Rwanda</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CompanyDetails;
