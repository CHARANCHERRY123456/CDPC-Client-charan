import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ onSearch }) => {
    const handleInputChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className="flex justify-center mb-6">
            <TextField 
                variant="outlined"
                placeholder="Search by name or company..."
                onChange={handleInputChange}
                className="w-full max-w-md"
            />
        </div>
    );
};

export default SearchBar;
