import React from 'react'
import { Grid,Box,Typography } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import EditIcon from '@mui/icons-material/Edit';

function Notes() {
  const {colors,isDarkTheme} = useSelector((state) => state.note)
    

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
    <Box sx={{backgroundColor: isDarkTheme ? "background.default" : colors[index].color,height:250, borderRadius:"1rem",border: isDarkTheme ? `2px solid ${colors[index].color}` : "none",}}>
      <Box sx={{display:"flex",flexDirection:"column",width:"95%",mx:"auto",height:"100%"}}>
<Box sx={{mt:1,display:"flex",justifyContent:"space-between"}}>
  <Typography sx={{fontSize:"20px"}}>Title</Typography>
  <Box sx={{cursor:"pointer"}}><DeleteIcon sx={{color:isDarkTheme? colors[index].color:"#3D423C"}}/>

  </Box>
</Box>
{/* middle area */}
<Box sx={{width:"95%",height:"65%",mx:"auto",overflow:"hidden"}}>
 
    <Typography sx={{p:1,fontSize:"16px"}}>
   Text area
    </Typography>


</Box>
{/* bottom area */}
<Box sx={{display:"flex",width:"95%",mx:"auto",justifyContent:"space-between"}}>
  <Typography>21.08.2024</Typography>
  <Box sx={{display:"flex",justifyContent:"flex-end"}}>
{/* <Box><ColorLensIcon/></Box> */}
<Box sx={{width:"32px",height:"32px",backgroundColor:isDarkTheme? "background.default":"#3D423C",color:isDarkTheme? colors[index]:"white", borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",border: isDarkTheme ? `2px solid ${colors[index]}` : "none"}}><EditIcon sx={{fontSize:"20px"}}/></Box>
  </Box>

</Box>
      </Box>
    </Box>
    </Grid>
  ))}
</Grid>
</Box>
</>
  )
}

export default Notes
