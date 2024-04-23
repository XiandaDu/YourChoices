import React, { useState } from 'react';
import './css/searchBar.css';  // Import the CSS for styling
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';
import { SectionWrapper } from '../hoc'

const SearchBar = () => {
    const theme = useTheme();

    const [isFocused, setIsFocused] = useState(false);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', marginTop: 5 }}>
                <TextField
                fullWidth // This prop stretches the TextField to full width
                id="input-with-icon-textfield"
                label="Search field"
                type="search"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon sx={{ fontSize: '2rem', color: isFocused ? theme.palette.primary.main : 'inherit' }} />
                    </InputAdornment>
                    ),
                    style: {
                        height: '3rem',
                        fontSize: '2rem'
                      },
                }}
                InputLabelProps={{
                    style: {
                        transform: 'translate(-5px, -15px) scale(1.3)', 
                    },
                }}
                
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                variant="standard"
                />
            </Box>
</div>

    );
}

export default SectionWrapper(SearchBar, '')
