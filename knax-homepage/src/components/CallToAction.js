     // src/components/CallToAction.js
     import React from 'react';
     import { Box, Button, Typography } from '@mui/material';

     const CallToAction = () => {
         return (
             <Box className="call-to-action">
                 <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#ffffff' }}>
                     🚀 Join the Knax Community Today!
                 </Typography>
                 <Typography variant="body1" sx={{ marginBottom: '30px', color: '#ffffff', fontStyle: 'italic' }}>
                     Sign up now and receive exclusive benefits and a 10% bonus on your first sale!
                 </Typography>
                 <Button variant="contained" className="button-primary" sx={{ padding: '12px 24px', borderRadius: '25px', fontSize: '1.2rem' }}>
                     Let's Build Knax Together!
                 </Button>
             </Box>
         );
     };

     export default CallToAction;