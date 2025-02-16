     // src/components/InternshipSection.js
     import React, { useState } from 'react';
     import { Box, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
     import './InternshipSection.css'; // Create a separate CSS file for styles

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
             <Box sx={{ padding: '50px', backgroundColor: '#03dac6', borderRadius: '12px', margin: '20px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}>
                 <Typography variant="h4" align="center" sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#ffffff' }}>
                     🎓 Level Up Your Career – Join Our Internship Program!
                 </Typography>
                 <Typography variant="body1" align="center" sx={{ marginBottom: '30px', color: '#ffffff' }}>
                     Our internship program offers hands-on experience in various fields. Apply now to kickstart your career!
                 </Typography>
                 <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: '30px' }}>
                     <Box sx={{ width: '300px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                         <Typography variant="h6" sx={{ fontWeight: 'bold' }}>What You Will Gain:</Typography>
                         <ul>
                             <li>Real-world experience in your field of interest</li>
                             <li>Mentorship from industry professionals</li>
                             <li>Networking opportunities with peers and leaders</li>
                         </ul>
                     </Box>
                     <Box sx={{ width: '300px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                         <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Internship Positions Available:</Typography>
                         <ul>
                             <li>Software Intern</li>
                             <li>Marketing Intern</li>
                             <li>Design Intern</li>
                             <li>Sales Intern</li>
                         </ul>
                     </Box>
                 </Box>
                 <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                     <TextField
                         label="Your Name"
                         variant="outlined"
                         required
                         sx={{ margin: '10px', width: '300px', backgroundColor: '#ffffff' }}
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                     />
                     <TextField
                         label="Your Email"
                         variant="outlined"
                         required
                         sx={{ margin: '10px', width: '300px', backgroundColor: '#ffffff' }}
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                     />
                     <TextField
                         label="Preferred Start Date"
                         type="date"
                         variant="outlined"
                         required
                         sx={{ margin: '10px', width: '300px', backgroundColor: '#ffffff' }}
                         InputLabelProps={{
                             shrink: true,
                         }}
                         value={date}
                         onChange={(e) => setDate(e.target.value)}
                     />
                     <FormControl variant="outlined" sx={{ margin: '10px', width: '300px' }}>
                         <InputLabel id="position-label" sx={{ color: '#6200ea' }}>Position</InputLabel>
                         <Select
                             labelId="position-label"
                             value={position}
                             onChange={(e) => setPosition(e.target.value)}
                             label="Position"
                             sx={{ backgroundColor: '#ffffff' }}
                         >
                             <MenuItem value="Software Intern">Software Intern</MenuItem>
                             <MenuItem value="Marketing Intern">Marketing Intern</MenuItem>
                             <MenuItem value="Design Intern">Design Intern</MenuItem>
                             <MenuItem value="Sales Intern">Sales Intern</MenuItem>
                         </Select>
                     </FormControl>
                     <Button variant="contained" className="button-primary" type="submit" sx={{ marginTop: '20px', width: '300px' }}>Apply Now</Button>
                 </form>
             </Box>
         );
     };

     export default InternshipSection;