import React from 'react'
import { Grid,Box,Typography } from '@mui/material'

function Notes() {
    const colors = ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#bdb2ff"]

  return (
<>
<Box sx={{
    width:"70%",
    margin:"0 auto"
}}>
<Grid container spacing={2} mt={5}>
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
