     // src/components/CommunityTrust.js
     import React from 'react';
     import { Box, Typography, Grid } from '@mui/material';

     const CommunityTrust = () => {
         return (
             <Box sx={{ padding: '50px', backgroundColor: '#2a2a2a', borderRadius: '8px', margin: '20px' }}>
                 <Typography variant="h4" align="center" sx={{ marginBottom: '30px', fontWeight: 'bold', color: '#03dac6' }}>
                     Why Choose Knax?
                 </Typography>
                 <Grid container spacing={4}>
                     <Grid item xs={12} sm={6} md={4}>
                         <Typography variant="h6" sx={{ color: '#bb86fc', fontWeight: 'bold' }}>Quality Products</Typography>
                         <Typography variant="body1" sx={{ color: '#ffffff' }}>
                             We offer a wide range of high-quality computers and accessories to meet your needs.
                         </Typography>
                     </Grid>
                     <Grid item xs={12} sm={6} md={4}>
                         <Typography variant="h6" sx={{ color: '#bb86fc', fontWeight: 'bold' }}>Expert Support</Typography>
                         <Typography variant="body1" sx={{ color: '#ffffff' }}>
                             Our team is here to provide you with expert advice and support for all your purchases.
                         </Typography>
                     </Grid>
                     <Grid item xs={12} sm={6} md={4}>
                         <Typography variant="h6" sx={{ color: '#bb86fc', fontWeight: 'bold' }}>Customer Satisfaction</Typography>
                         <Typography variant="body1" sx={{ color: '#ffffff' }}>
                             We prioritize customer satisfaction and strive to exceed your expectations.
                         </Typography>
                     </Grid>
                 </Grid>
             </Box>
         );
     };

     export default CommunityTrust;