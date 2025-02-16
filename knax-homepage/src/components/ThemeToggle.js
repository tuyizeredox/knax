import React, { useState } from 'react';
import { Switch } from '@mui/material';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <Switch checked={darkMode} onChange={handleToggle} />
    );
};

export default ThemeToggle; 