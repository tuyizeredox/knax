import React, { useState } from 'react';
import { Box, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FaLaptopCode, FaNetworkWired, FaBroadcastTower, FaMicrochip } from 'react-icons/fa';
import './InternshipSection.css';

const InternshipSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [position, setPosition] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, date, position });
    };

    return (
        <Box sx={{ padding: '50px', background: 'linear-gradient(135deg, #141e30, #243b55)', borderRadius: '12px', margin: '20px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', color: '#fff' }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
                🚀 Elevate Your Career – Join Our Internship Program!
            </Typography>
            <Typography variant="body1" align="center" sx={{ marginBottom: '30px' }}>
                Gain hands-on experience and work with industry experts in a dynamic environment.
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: '30px' }}>
                <Box sx={{ width: '300px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', color: '#000' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>🌟 Benefits of Joining:</Typography>
                    <ul>
                        <li>Real-world experience in your field of interest</li>
                        <li>Mentorship from industry professionals</li>
                        <li>Networking opportunities with peers and leaders</li>
                    </ul>
                </Box>
                <Box sx={{ width: '300px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', color: '#000' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>📌 Internship Positions:</Typography>
                    <ul>
                        <li><span><FaLaptopCode /></span> Software Development</li>
                        <li><span><FaNetworkWired /></span> Networking & Internet Technology</li>
                        <li><span><FaBroadcastTower /></span> Electronics & Telecommunication</li>
                        <li><span><FaMicrochip /></span> Computer Systems & Architecture</li>
                    </ul>
                </Box>
            </Box>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField label="Your Name" variant="outlined" required sx={{ margin: '10px', width: '300px', backgroundColor: '#ffffff', borderRadius: '8px' }} value={name} onChange={(e) => setName(e.target.value)} />
                <TextField label="Your Email" variant="outlined" required sx={{ margin: '10px', width: '300px', backgroundColor: '#ffffff', borderRadius: '8px' }} value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Preferred Start Date" type="date" variant="outlined" required sx={{ margin: '10px', width: '300px', backgroundColor: '#ffffff', borderRadius: '8px' }} InputLabelProps={{ shrink: true }} value={date} onChange={(e) => setDate(e.target.value)} />
                
                <FormControl variant="outlined" sx={{ margin: '10px', width: '300px' }}>
                    <InputLabel id="position-label">Select Position</InputLabel>
                    <Select labelId="position-label" value={position} onChange={(e) => setPosition(e.target.value)} label="Position" sx={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
                        <MenuItem value="Software Intern">Software Development</MenuItem>
                        <MenuItem value="Marketing Intern">Networking & Internet Technology</MenuItem>
                        <MenuItem value="Design Intern">Electronics & Telecommunication</MenuItem>
                        <MenuItem value="Sales Intern">Computer Systems & Architecture</MenuItem>
                    </Select>
                </FormControl>
                
                <Button variant="contained" className="button-primary" type="submit" sx={{ marginTop: '20px', width: '300px', backgroundColor: '#ff9800', color: '#fff', fontWeight: 'bold' }}>Apply Now</Button>
            </form>
        </Box>
    );
};

export default InternshipSection;
