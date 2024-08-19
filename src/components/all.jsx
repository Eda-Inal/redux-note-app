import Notes from "./notes";
import React from 'react'
import { Grid,Box } from "@mui/material";
import Side from "./Side";
import Theme from "./theme";

function All() {
  return (
  <>
     <Theme/>
  <Box >
 
    <Grid container spacing={2} width="100%" margin="auto">
    <Grid xs={4} >
<Side/>
    </Grid>


    <Grid xs={8}>
      {/* <Notes/> */}
      </Grid>

  </Grid> 
  </Box>
 
  
  </>
  )
}

export default All
