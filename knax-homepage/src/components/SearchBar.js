import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';

const SearchBar = () => {
    const [value, setValue] = useState(null);
    const options = ['Product 1', 'Product 2', 'Product 3']; // Replace with dynamic data

    return (
        <Autocomplete
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            options={options}
            renderInput={(params) => <TextField {...params} label="Search Products" variant="outlined" />}
        />
    );
};

export default SearchBar; 