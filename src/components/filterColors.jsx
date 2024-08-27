import React from 'react'
import { Box,Typography} from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'

function FilterColors() {
    // const dispatch = useDispatch();
    const { colors } = useSelector((state) => state.note);
  return (
<Box sx={{display:"flex"}}>
<Box sx={{mr:{xs:0.2,sm:0.3,md:0.4,lg:0.5}}}>
<Typography>Filter by colors</Typography>
</Box>
<Box sx={{  display: "flex"}}>
                  {
                    colors.map((color) => (
                      <Box   sx={{ backgroundColor: `${color.color}`, width: "20px", borderRadius: "50%", height: "20px", border: "0.5px solid gray", mb: "7px", cursor: "pointer",display:"flex",alignItems:"center",justifyContent:"center",mr:0.3 }}>
                   
                      </Box>
                    ))
                  }
                </Box>
</Box>
  )
}

export default FilterColors
