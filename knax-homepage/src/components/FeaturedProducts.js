import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import './FeaturedProducts.css'; // Create a separate CSS file for styles

const products = [
    { id: 1, name: "Laptop", image: "./laptop.jpg", description: "High-performance laptop for all your needs." },
    { id: 2, name: "Smartphone", image: "./apple-iphone-16-pro-max-1.jpg", description: "Latest smartphone with cutting-edge technology." },
    { id: 3, name: "Headphones", image: "./headphone.jpg", description: "Noise-cancelling headphones for immersive sound." },
];

const FeaturedProducts = () => {
    return (
        <Box sx={{ padding: '50px', backgroundColor: '#f9f9f9', borderRadius: '12px', margin: '20px' }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: '30px', fontWeight: 'bold', color: '#3498db' }}>
                Featured Products
            </Typography>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Paper className="product-card" sx={{ padding: '20px', textAlign: 'center', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold' }}>{product.name}</Typography>
                            <Typography variant="body2" sx={{ color: '#555' }}>{product.description}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FeaturedProducts; 