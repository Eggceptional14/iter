import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';

const SearchBar = () => {
  return (
    <>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      // label="Search for your destination!"
      variant="outlined"
      placeholder="Search for your destination!"
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx = {{
        width: '340px',
        backgroundColor: '#F5EBDB',
        borderRadius: '15px',
        "& fieldset": { border: 'none' },
        
        
      }}
    />
    </>
  );
};

export default SearchBar;