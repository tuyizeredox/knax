import React from 'react';
import { Box, Typography } from '@mui/material';
import { Magnifier } from 'react-image-magnifiers';

const ProductPage = ({ product }) => {
    return (
        <Box>
            <Magnifier
                imageSrc={product.image}
                imageAlt={product.name}
                largeImageSrc={product.image}
            />
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="body1">{product.description}</Typography>
        </Box>
    );
};

export default ProductPage; 