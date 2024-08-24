import React from 'react'
import { Grid,Box,Typography } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import EditIcon from '@mui/icons-material/Edit';
import { setDeleteNotes } from '../redux/noteSlice';
import EditNoteIcon from '@mui/icons-material/EditNote';

function Notes() {
  const dispatch = useDispatch();
  const {colors,isDarkTheme,allNotes,filterNotes} = useSelector((state) => state.note);
 const  handleDelete = (id) => {
dispatch(setDeleteNotes(id))
  }
  const notesToDisplay = filterNotes.length > 0 ? filterNotes : allNotes;
  
    


  return (
<>
<Box sx={{
    
width:"80%",
mx:"auto",
mt:4
}}>
<Grid container spacing={2} >
{ notesToDisplay .length >0 ? (
notesToDisplay .map((note, index) => (
  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
  <Box sx={{backgroundColor: isDarkTheme ? "background.default" : note.color,height:250, borderRadius:"1rem",border: isDarkTheme ? `2px solid ${note.color}` : "none",}}>
    <Box sx={{display:"flex",flexDirection:"column",width:"95%",mx:"auto",height:"100%"}}>
<Box sx={{mt:1,display:"flex",justifyContent:"space-between"}}>
<Typography sx={{fontSize:"20px"}}>{note.title}</Typography>
<Box  onClick = {()=> handleDelete(note.id)} sx={{cursor:"pointer",}}><DeleteIcon sx={{color:isDarkTheme? note.color:"#3D423C"}}/>

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
<Box sx={{display:"flex",justifyContent:"flex-end",}}>
{/* <Box><ColorLensIcon/></Box> */}
<Box sx={{width:"32px",height:"32px",backgroundColor:isDarkTheme? "background.default":"#3D423C",color:isDarkTheme? note.color:"white", borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",border: isDarkTheme ? `2px solid ${note.color}` : "none", ':hover' : {
  width:"34px",height:"34px"
}
}}><EditIcon sx={{fontSize:"20px",}}/></Box>
</Box>

</Box>
    </Box>
  </Box>
  </Grid>
))
) : (
  <Box sx={{display:"flex",alignItems:"center", maxWidth:"500px", p:2,backgroundColor:"#9899e6",color:"white",borderRadius:"0.4rem"}}>
      <EditNoteIcon sx={{fontSize:"30px"}}/>
 <Typography variant='h5'>
  You have no notes yet..
  </Typography>

  </Box>
 
)
}
</Grid>
</Box>
</>
  )
}

export default Notes
