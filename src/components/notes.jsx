import React from 'react'
import { Grid,Box,Typography } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import EditIcon from '@mui/icons-material/Edit';

function Notes() {
  const {colors,isDarkTheme,allNotes} = useSelector((state) => state.note)
    
console.log(allNotes[0].color);

  return (
<>
<Box sx={{
    
width:"80%",
mx:"auto",
mt:4
}}>
<Grid container spacing={2} >
{allNotes.map((note, index) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
    <Box sx={{backgroundColor: isDarkTheme ? "background.default" : note.color,height:250, borderRadius:"1rem",border: isDarkTheme ? `2px solid ${note.color}` : "none",}}>
      <Box sx={{display:"flex",flexDirection:"column",width:"95%",mx:"auto",height:"100%"}}>
<Box sx={{mt:1,display:"flex",justifyContent:"space-between"}}>
  <Typography sx={{fontSize:"20px"}}>{note.title}</Typography>
  <Box sx={{cursor:"pointer"}}><DeleteIcon sx={{color:isDarkTheme? note.color:"#3D423C"}}/>

  </Box>
</Box>
{/* middle area */}
<Box sx={{width:"95%",height:"65%",mx:"auto",overflow:"hidden"}}>
 
    <Typography sx={{p:1,fontSize:"16px"}}>
  {note.textarea}
    </Typography>


</Box>
{/* bottom area */}
<Box sx={{display:"flex",width:"95%",mx:"auto",justifyContent:"space-between"}}>
  <Typography>{note.date}</Typography>
  <Box sx={{display:"flex",justifyContent:"flex-end"}}>
{/* <Box><ColorLensIcon/></Box> */}
<Box sx={{width:"32px",height:"32px",backgroundColor:isDarkTheme? "background.default":"#3D423C",color:isDarkTheme? note.color:"white", borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",border: isDarkTheme ? `2px solid ${note.color}` : "none"}}><EditIcon sx={{fontSize:"20px"}}/></Box>
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
