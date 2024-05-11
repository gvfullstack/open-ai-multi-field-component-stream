import React, { useState, useRef } from "react";
import {TextField} from "@mui/material";
import { styled } from '@mui/material/styles';
import { useRecoilState } from "recoil";
import { destination } from "./NeighborhoodsDisplayAtoms";

const BlackAndWhiteOutlinedTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white', // Explicitly set the default border color
    },
    '&:hover fieldset': {
      borderColor: 'white', // Ensure hover border color is white
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white', // Ensure focus border color is white
    },
    borderRadius: '30px',
    backgroundColor: 'black', // Set background color to black
  },
  '& .MuiOutlinedInput-input': {
    color: 'white', // Set text color to white
    fontSize: '18px',
    fontWeight: '400',
    padding: '10px 10px 10px 20px',
  },
  '& .MuiInputLabel-root': {
    color: 'white', // Set label color to white
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white', // Ensure the label color remains white when focused
  },
  minWidth: '300px',
  maxWidth: '20rem',
  alignSelf: 'center',
}));

const DestinationInputBar: React.FC<any> = (props) => {
    const [dest, setDest] = useRecoilState(destination);
    const [inputLength, setInputLength] = useState(0);
    const maxLength = 255;

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setDest(newValue);
      setInputLength(newValue.length);
    }


  return (
    <BlackAndWhiteOutlinedTextField
      label="Enter your destination"
      value={dest}
      onChange={handleChange}
      fullWidth
      margin="normal"
      variant="outlined"
      size="small"
      inputRef={inputRef}
      disabled={inputLength >= maxLength}
      
    />
  );
};

export default DestinationInputBar;