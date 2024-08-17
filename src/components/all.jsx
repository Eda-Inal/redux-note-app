import Notes from "./notes";
import React from 'react'
import { Grid,Box } from "@mui/material";

function All() {
  return (
  <>
  <Box sx={{mt:4}}>
    <Grid container spacing={2} width="90%" margin="auto">
    <Grid xs={3}>

    </Grid>


    <Grid xs={9}><Notes/></Grid>

  </Grid> 
  </Box>
 
  
  </>
  )
}

export default All
