import React from 'react'
import { Grid,Box,Typography } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'

function Notes() {
  const {colors} = useSelector((state) => state.note)
    

  return (
<>
<Box sx={{
    
width:"80%",
mx:"auto",
mt:4
}}>
<Grid container spacing={2} >
{Array.from(Array(6)).map((_, index) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
    <Box sx={{backgroundColor : colors[index], height:250, borderRadius:"1rem"}}></Box>
    </Grid>
  ))}
</Grid>
</Box>
</>
  )
}

export default Notes
