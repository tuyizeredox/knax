import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import './Testimonials.css'; // Create a separate CSS file for styles

const testimonials = [
    { id: 1, text: "Great service and amazing products!", author: "Eric Niyonsaba" },
    { id: 2, text: "I love shopping here! Highly recommend.", author: "Aline Mukamana" },
    { id: 3, text: "Fast shipping and excellent customer support.", author: "Jean Claude Nkurunziza" },
];

const Testimonials = () => {
    return (
        <Box sx={{ padding: '50px', backgroundColor: '#f9f9f9', borderRadius: '12px', margin: '20px' }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: '30px', fontWeight: 'bold', color: '#3498db' }}>
                What Our Customers Say
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', flexWrap: 'wrap' }}>
                {testimonials.map((testimonial) => (
                    <Paper key={testimonial.id} sx={{ margin: '10px', padding: '20px', textAlign: 'center', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', flex: '1 1 300px', transition: 'transform 0.3s' }} className="testimonial-card">
                        <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#555' }}>
                            "{testimonial.text}"
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#333' }}>
                            - {testimonial.author}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

export default Testimonials; 