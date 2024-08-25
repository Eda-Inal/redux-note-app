import React from 'react'
import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterBy,setFilterSearch } from '../redux/noteSlice';

function FilterOptions() {
    const dispatch = useDispatch();
    const filterBy = useSelector((state) => state.note.filterBy);
    const handleFilterChange = (event) => {
        dispatch(setFilterBy(event.target.value));
    };
  return (
    <Box sx={{ width: "90%", mx: "auto", display: "flex", justifyContent: "flex-start", mt: 1 }}>
    <RadioGroup
        row
        value={filterBy}
        onChange={handleFilterChange}
    >
        <FormControlLabel value="title" control={<Radio />} label="Search by title" />
        <FormControlLabel value="content" control={<Radio />} label="Search by content" />
    </RadioGroup>
</Box>
  )
}

export default FilterOptions
