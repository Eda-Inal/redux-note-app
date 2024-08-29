import React from 'react';
import { Box, InputBase, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterSearch } from '../redux/noteSlice';

function Search() {
  const dispatch = useDispatch();
  const { filterSearch } = useSelector((state) => state.note);

  const handleOnChange = (e) => {
    dispatch(setFilterSearch(e.target.value));
  };

  return (
    <Box
      sx={{
        mx: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <InputBase
        placeholder="Find note"
        onChange={handleOnChange}
        value={filterSearch}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon sx={{ color: '#9899e6', opacity: 0.5 }} />
          </InputAdornment>
        }
        sx={{
          flexGrow: 3,
          height: '35px',
          mx: 1,
          borderRadius: '1rem',
          border: `1px #9899e6 solid`,
          boxShadow: 1,
          paddingLeft: '10px',
          paddingRight: '10px', 
          '& input': {
            padding: 0,
          },
        }}
      />
    </Box>
  );
}

export default Search;
