import React, { useState } from 'react';
import { FaLaptop, FaDesktop, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const CompanyDetails = () => {
    const [hover, setHover] = useState(null);

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #eceff1, #b0bec5)',
        color: '#2c3e50',
        padding: '40px',
        textAlign: 'center',
    };

    const cardStyle = {
        maxWidth: '500px',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        borderRadius: '20px',
        padding: '30px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    };

    const headingStyle = {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#1565c0',
        marginBottom: '10px',
    };

    const subheadingStyle = {
        fontSize: '18px',
        fontWeight: '500',
        color: '#455a64',
        marginBottom: '20px',
    };

    const textStyle = {
        fontSize: '16px',
        color: '#37474f',
        marginBottom: '20px',
    };

    const iconContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginBottom: '20px',
    };

    const iconStyle = (color) => ({
        fontSize: '26px',
        color: hover === color ? '#ff4081' : color,
        transition: 'color 0.3s ease, transform 0.3s ease',
        cursor: 'pointer',
    });

    const infoStyle = {
        fontSize: '18px',
        fontWeight: '500',
        marginTop: '15px',
    };

    return (
        <div style={containerStyle}>
            <div 
                style={{ 
                    ...cardStyle, 
                    transform: hover ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: hover ? '0 15px 40px rgba(0, 0, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.2)',
                }}
            >
                <h2 style={headingStyle}>Knax Technology Ltd</h2>
                <h3 style={subheadingStyle}>@knax_250Technology</h3>
                <p style={textStyle}>High-quality computers and accessories for all your needs.</p>

                <div style={iconContainerStyle}>
                    <div 
                        onMouseEnter={() => setHover('#1565c0')}
                        onMouseLeave={() => setHover(null)}
                    >
                        <FaLaptop style={iconStyle('#1565c0')} />
                        <p style={textStyle}>Laptops</p>
                    </div>
                    <div 
                        onMouseEnter={() => setHover('#2e7d32')}
                        onMouseLeave={() => setHover(null)}
                    >
                        <FaDesktop style={iconStyle('#2e7d32')} />
                        <p style={textStyle}>Desktops</p>
                    </div>
                </div>

                <p style={infoStyle}>Manager: <span style={{ fontWeight: 'bold' }}>Directeur Général</span></p>

                <p 
                    style={{ ...infoStyle, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                    onMouseEnter={() => setHover('#1565c0')}
                    onMouseLeave={() => setHover(null)}
                >
                    <FaPhone style={iconStyle('#1565c0')} />
                    <span>0782562906</span>
                </p>

                <p 
                    style={{ ...infoStyle, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                    onMouseEnter={() => setHover('#d32f2f')}
                    onMouseLeave={() => setHover(null)}
                >
                    <FaMapMarkerAlt style={iconStyle('#d32f2f')} />
                    <span>Makuza Peace Plaza, Nyarugenge, Kigali, Rwanda</span>
                </p>
            </div>
        </div>
    );
};

export default CompanyDetails;
