     // src/components/BusinessGrowth.js
     import React from 'react';
     import { Box, Typography, Button } from '@mui/material';

     const BusinessGrowth = () => {
         return (
             <Box className="business-growth">
                 <Typography variant="h4" align="center" sx={{ marginBottom: '30px', fontWeight: 'bold', color: '#ffffff' }}>
                     Boost Your Business with Knax
                 </Typography>
                 <Typography variant="body1" align="center" sx={{ marginBottom: '30px', color: '#ffffff' }}>
                     Discover how our platform can enhance your sales and expand your reach in the market.
                 </Typography>
                 <Button variant="contained" className="button-secondary" sx={{ display: 'block', margin: '0 auto', padding: '12px 24px', borderRadius: '25px' }}>
                     Get Started Now
                 </Button>
             </Box>
         );
     };

     export default BusinessGrowth;