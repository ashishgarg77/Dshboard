import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import Filter from "../Dashboard3/image/Filter.png";
export default function BasicSelect(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box  sx={{ width: 150, height: 38 ,  backgroundColor: "#F2F2FA", position:"relative"}} >
       {
        props.placeholder!=="Select Month" && ( <img src={Filter} alt="" width={15} height={15} style={{position : "absolute", top: "10px", left:"5px", zIndex:"1"}} />)
       }
      <FormControl fullWidth size='small' sx={{ backgroundColor: "#F2F2FA"}}>
        <InputLabel id="demo-simple-select-label" sx={{fontSize: 12, marginLeft:"20px", color : "#959FBA",}}>{props.placeholder}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          style={{paddingLeft: "10px"}}
        >

          <MenuItem value={10}>A</MenuItem>
          <MenuItem value={20}>B</MenuItem>
          <MenuItem value={30}>C</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}