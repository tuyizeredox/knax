import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email submitted: ${email}`);
        setEmail('');
    };

    return (
        <Box sx={{ padding: '50px', backgroundColor: '#f4f4f4', textAlign: 'center', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#3498db' }}>
                Sign Up for Our Newsletter
            </Typography>
            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TextField
                    label="Your Email"
                    variant="outlined"
                    required
                    sx={{ marginRight: '10px', width: '300px', backgroundColor: '#ffffff' }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="contained" className="button-primary" type="submit">Subscribe</Button>
            </form>
        </Box>
    );
};

export default NewsletterSignup; 