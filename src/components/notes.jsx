import React from 'react'
import { Grid,Box,Typography } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import { setDeleteNotes,setEditNote,setAlert } from '../redux/noteSlice';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { FaEdit } from "react-icons/fa";

function Notes() {
  const dispatch = useDispatch();
  const {colors,isDarkTheme,allNotes,filterNotes,editNote} = useSelector((state) => state.note);
 const  handleDelete = (id) => {
dispatch(setDeleteNotes(id))
dispatch(setAlert({show:true,message:"The note has been removed.",background:"success.main",positive:true}))
  }
  const notesToDisplay = filterNotes.length > 0 ? filterNotes : allNotes;

  const handleEditNote = (id) => {
    dispatch(setEditNote(id))
  }
  
  console.log(("edit",editNote)); 


  return (
<>
<Box sx={{
    
width:"90%",
mx:"auto",
mt:1
}}>
<Grid container spacing={2} >
{ notesToDisplay .length >0 ? (
notesToDisplay .map((note, index) => (
  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
  <Box sx={{backgroundColor: isDarkTheme ? "background.default" : note.color,height:250, borderRadius:"1rem",border: isDarkTheme ? `2px solid ${note.color}` : "none",}}>
    <Box sx={{display:"flex",flexDirection:"column",width:"95%",mx:"auto",height:"100%"}}>
<Box sx={{mt:1,display:"flex",justifyContent:"space-between"}}>
<Typography sx={{fontSize:"20px"}}>{note.title}</Typography>
<Box  onClick = {()=> handleDelete(note.id)} sx={{cursor:"pointer",}}><DeleteIcon sx={{color:isDarkTheme? note.color:"#474748",":hover": {
    color:"#656568"
  }}}/>

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
<Box onClick={() => handleEditNote(note.id)} sx={{
  color:"#474748",
  cursor:"pointer",
  ":hover": {
    color:"#656568"
  }


}}

><FaEdit size={20}/></Box>
</Box>

</Box>
    </Box>
  </Box>
  </Grid>
))
) : (
  <Box sx={{display:"flex",alignItems:"center", maxWidth:"500px", p:2,color:"error.main"}}>
      <EditNoteIcon sx={{fontSize:"30px"}}/>
 <Typography variant='h6' >
 You don't have any notes yet..
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
