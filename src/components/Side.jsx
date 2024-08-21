import React from 'react'
import { Box, Typography, Grid, Button, styled, TextField ,InputBase} from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { setSideBarNoteColor,setSideBarOpen } from '../redux/noteSlice';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


function Side() {
  const dispatch = useDispatch();
  const { colors,sideBarNoteColor,sideBarOpen } = useSelector((state) => state.note);

  const StyledTextField = styled(TextField)({
    
    '& .MuiInputBase-root': {
      height: "100%",
    },
    width: '90%',
   
  });
  const handleSetSideBarNoteColor = (color) => {
dispatch(setSideBarNoteColor(color))
  };
  const handleSideBarOpen = ()=> {
    dispatch(setSideBarOpen(false));
    console.log(sideBarOpen);
    
  }

  return (
    <>
  
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        width: {xs:"100%",sm:"55%",md:"40%",lg:"35%",xl:"32%"},
       position:"fixed",
        height: "100vh",
        boxShadow: 10,
        backgroundColor:"sideBarColor.main",
        zIndex:9999999,
        position:"fixed",
        transform: sideBarOpen ? "translateX(0)" : "translateX(100%)",
        opacity: sideBarOpen ? 1 : 0,
        transition: "transform 0.9s ease, opacity 0.5s ease",
        top:0
        
        
  
      }}>
     
 
        
<Box sx={{mt: 2,position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}}>
  
<Box onClick= {handleSideBarOpen} sx={{
 width:"30px",height:"30px", borderRadius:"50%",  backgroundColor:"#9899e6", boxShadow:2,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"white",zIndex:999999 ,position:"absolute",top:5,right:10

  }}>
<CloseOutlinedIcon/>
        </Box>
<Typography variant='h4' sx={{ textAlign: "center",color:"#9899e6" }}>Note Me!</Typography>
</Box>
       
        <Box sx={{ position: "relative"}}>
        <Box 
  sx={{
    display: 'flex', 
    justifyContent: 'center', 
    mt: 2
  }}
>
  <InputBase
  placeholder='Title'
    sx={{
  
      height: '35px',
      width: '90%',
      borderRadius: '1rem',
      border: `2px ${sideBarNoteColor} solid`,
      boxShadow: 1,
      paddingLeft: '10px',
      '& input': {
        padding: 0,
      },
    }}
  />
</Box>
          <Box sx={{ height: 300, borderRadius: "1rem", width: "90%", mt: 2, mx: "auto", border:`2px ${sideBarNoteColor} solid`,boxShadow:3 }}>
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
          <Box sx={{display:"flex",width:"95%", justifyContent:"flex-end"}}>
          <Button variant='contained'  disableElevation  sx={{ borderRadius: "1rem", backgroundColor: `${sideBarNoteColor}`, textTransform: "none", width: "120px", '&:hover': {
          backgroundColor: `${sideBarNoteColor}cc`,boxShadow:2 
        },boxShadow:2, mt:2  }} >
     
          <Typography color="black" sx={{fontSize: "19px"}}>Add</Typography></Button>
          </Box>
        
        </Box>
      </Box>
    </>
  )
}

export default Side
