import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

function valuetext(value) {
  const dollarValue = value * 100; // assuming each slider step represents $100
  return `$${dollarValue}`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([200, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography id="non-linear-slider" gutterBottom sx={{ mb: 5 }}>
        Price range: ${value[0]}-${value[1]}
      </Typography>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        min={0}
        max={1000}
      />
    </Box>
  );
}
