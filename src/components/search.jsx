import React from 'react'
import { Box,InputBase } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { setFilterSearch } from '../redux/noteSlice';



function Search() {
  const dispatch = useDispatch()
  const {filterSearch,filterNotes} = useSelector((state) => state.note);
  console.log("filter notes",filterNotes);
  
  
  
  const handleOnChange = (e) => {
dispatch(setFilterSearch(e.target.value))
  }
  return (
 
 
    <Box 
    sx={{
     
        mx:"auto",
      display: 'flex', 
      justifyContent: 'center', 
     
      alignItems:"center"
    }}
  >
  
    <InputBase
    placeholder='Find note'
    onChange={handleOnChange}
    value={filterSearch}
      sx={{
    flexGrow:3,
        height: '35px',
        mx:1,
        borderRadius: '1rem',
        border: `1px #9899e6  solid`,
        boxShadow: 1,
        paddingLeft: '10px',
        '& input': {
          padding: 0,
        },
      }}
    />
  
  
  </Box>
    
   

  
  )
}

export default Search
