import React, { useState } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

const FilteredProductsList = () => {
  const [minPrice,setMinPrice]=useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice( event.target.value );
    };
  return (
    <div>
      <h3>Результаты поиска</h3>
      <div>
        <div>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              value={minPrice}
              onChange={handleChange('minPrice')}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'minPrice',
              }}
            />
            <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
          </FormControl>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FilteredProductsList;
