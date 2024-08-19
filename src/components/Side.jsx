import React from 'react'
import { Box, Typography, Divider, Grid, Button, styled, TextField } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { setSideBarNoteColor } from '../redux/noteSlice';

function Side() {
  const dispatch = useDispatch();
  const { colors,sideBarNoteColor } = useSelector((state) => state.note);

  const StyledTextField = styled(TextField)({
    '& .MuiInputBase-root': {
      height: "100%",
    },
    width: '90%',
    '& .MuiInputBase-input': {
      color: '#222', // Sabit yazı rengi
    },
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
       
        height: "100vh",
        boxShadow: 3
      }}>

        <Typography variant='h4' sx={{ textAlign: "center", mt: 1,color:"#75eab0" }}>Note Me!</Typography>
        <Box sx={{ position: "relative"}}>
          <Box sx={{backgroundColor:"white", height:"30px", width:"90%",mx:"auto", borderRadius:"1rem",mt:2,border:`4px ${sideBarNoteColor} solid`,boxShadow:1}}></Box>
          <Box sx={{ backgroundColor: "#F4EDFD", height: 300, borderRadius: "1rem", width: "90%", mt: 2, mx: "auto", border:`4px ${sideBarNoteColor} solid`,boxShadow:3 }}>
            <Grid container>

              <Grid xs={2} >

                <Box sx={{ height: 300, width: "90%", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center",  }}>
                  {
                    colors.map((color) => (
                      <Box  onClick={() => handleSetSideBarNoteColor(color)} sx={{ backgroundColor: `${color}`, width: "30px", borderRadius: "50%", height: "30px", border: "0.5px solid gray", mb: "7px", cursor: "pointer"  }}></Box>
                    ))
                  }
                </Box>
              </Grid>
              <Grid xs={10} sx={{ position: "relative" }}>
             
                <Box sx={{ display: "flex", justifyContent: "center",  height: "100%", width: "100%",alignItems:"center", }}>
                <StyledTextField 
             
  multiline
  rows={12}
  placeholder="Type here..."
  variant="outlined"
  InputProps={{
    disableUnderline: true,
    style: {
      border: 'none',
    },
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none', 
      },
      '&.Mui-focused fieldset': {
        border: 'none', 
      },
    },
    color:"black"
  }}
/>

                </Box>
              </Grid>
            </Grid>
          </Box>
          <Button variant='contained'  disableElevation  sx={{ borderRadius: "1rem", backgroundColor: `${sideBarNoteColor}`, textTransform: "none", width: "100px", right: 35, mt: 3, position: "absolute", '&:hover': {
          backgroundColor: `${sideBarNoteColor}cc`,boxShadow:2 
        },boxShadow:2  }} ><Typography color="black" sx={{fontSize: "18px"}}>Add</Typography></Button>
        </Box>
      </Box>
    </>
  )
}

export default Side
