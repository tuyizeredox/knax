import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

const Checkout = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <Box>
            {step === 1 && <div>Step 1: Shipping Information</div>}
            {step === 2 && <div>Step 2: Payment Information</div>}
            {step === 3 && <div>Step 3: Review Order</div>}
            <Button onClick={prevStep} disabled={step === 1}>Back</Button>
            <Button onClick={nextStep} disabled={step === 3}>Next</Button>
        </Box>
    );
};

export default Checkout; 