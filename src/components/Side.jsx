import React from 'react'
import { Box, Typography, Divider, Grid, Button, styled, TextField } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { setSideBarNoteColor } from '../redux/noteSlice';

function Side() {
  const dispatch = useDispatch();
  const { colors,sideBarNoteColor } = useSelector((state) => state.note);

  const StyledTextField = styled(TextField)({
    '& .MuiInputBase-root': {
      height: "80%",
    },
    width: '80%',
  });
  const handleSetSideBarNoteColor = (color) => {
dispatch(setSideBarNoteColor(color))

  }

  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#E3D1FF",
        height: "100vh",
      }}>

        <Typography variant='h4' sx={{ textAlign: "center", mt: 1 }}>Keep Notes</Typography>
        <Box sx={{ position: "relative" }}>
          <Box sx={{ backgroundColor: "#F4EDFD", height: 250, borderRadius: "1rem", width: "80%", mt: 2, mx: "auto", border:`3px ${sideBarNoteColor} solid` }}>
            <Grid container>

              <Grid xs={2} >

                <Box sx={{ height: 250, width: "90%", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", }}>
                  {
                    colors.map((color) => (
                      <Box  onClick={() => handleSetSideBarNoteColor(color)} sx={{ backgroundColor: `${color}`, width: "30px", borderRadius: "50%", height: "30px", border: "0.5px solid gray", mb: "4px", cursor: "pointer"  }}></Box>
                    ))
                  }
                </Box>
              </Grid>
              <Grid xs={10} sx={{ position: "relative" }}>
                <Typography variant='h6' sx={{ mt: "5px", textAlign: "center" }}>Title</Typography>
                <Divider sx={{ width: "80%", mx: "auto" }} />
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1, height: "80%", width: "100%" }}>
                  <StyledTextField sx={{ mt: 1 }}
                    multiline
                    rows={6}
                    placeholder="Buraya yazın..."
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Button variant='contained'  disableElevation  sx={{ borderRadius: "1rem", backgroundColor: `${sideBarNoteColor}`, textTransform: "none", width: "100px", right: 35, mt: 3, position: "absolute", '&:hover': {
          backgroundColor: `${sideBarNoteColor}cc`, 
        }, }} ><Typography color="black" sx={{fontSize: "18px"}}>Add</Typography></Button>
        </Box>
      </Box>
    </>
  )
}

export default Side
