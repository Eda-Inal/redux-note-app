import React from 'react'
import { Box, Typography, Grid, Button, TextField ,InputBase} from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { setSideBarNoteColor,setSideBarOpen,setAddNewNote,setAllNotes,setNewNoteColor,setAlert } from '../redux/noteSlice';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Footer from './aboutme';


function Side() {
  const dispatch = useDispatch();
  const { colors,sideBarNoteColor,sideBarOpen,newNote, allNotes} = useSelector((state) => state.note);



  
  
  const handleSetSideBarNoteColor = (color) => {
dispatch(setSideBarNoteColor(color))
dispatch(setNewNoteColor(color))
  };
  const handleSideBarOpen = ()=> {
    dispatch(setSideBarOpen(false));
  
    
  }
  const handleChangeTextField = (e) => {
    
    const { name, value } = e.target;
    dispatch(setAddNewNote({ key: name, value }));
};

const handleAddNotes = () => {

  if (newNote.title.length > 21) {
    dispatch(setAlert({
      show: true,
      message: "Title cannot exceed 21 characters.",
      background: "error.main",
      positive: false
    }));
    return;
  }

 
  if (newNote.text.length < 5) {
    dispatch(setAlert({
      show: true,
      message: "Text must be at least 5 characters long.",
      background: "error.main",
      positive: false
    }));
    return;
  }
  if (newNote.text.length > 550) {
    dispatch(setAlert({
      show: true,
      message: "Text cannot exceed 550 characters.",
      background: "error.main",
      positive: false
    }));
    return;
  }

  
  if (newNote.title === "") {
    dispatch(setAlert({
      show: true,
      message: "You cannot add an untitled note.",
      background: "error.main",
      positive: false
    }));
    return;
  }
  if (newNote.text === "") {
    dispatch(setAlert({
      show: true,
      message: "You cannot add an empty note.",
      background: "error.main",
      positive: false
    }));
    return;
  }
  if (newNote.color === "") {
    dispatch(setAlert({
      show: true,
      message: "Please choose a color before adding a note!",
      background: "error.main",
      positive: false
    }));
    return;
  }

  dispatch(setAllNotes());

   if (allNotes.length === 0) {
   
    dispatch(setAlert({
      show: true,
      message: "Congrats! This is your first note! 🎉",
      background: "#9899e6",
      positive: true
    }));
  } else {
 
    dispatch(setAlert({
      show: true,
      message: "Your note has been successfully added!",
      background: "success.main",
      positive: true
    }));
  }
  dispatch(setSideBarOpen(false));
  dispatch(setSideBarNoteColor("#9899e6"));
};


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
<Typography variant='h4' sx={{ textAlign: "center",color:"#9899e6",fontFamily: 'Slabo 27px, system-ui',fontWeight:600 }}>Note Me!</Typography>
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
  value={newNote.title}
  name='title'
  onChange={handleChangeTextField}
  placeholder='Title'
  inputProps={{ maxLength: 21 }} 
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
  <Grid item xs={2}>
    <Box sx={{ 
      height: 300, 
      width: "90%", 
      display: "flex", 
      alignItems: "center", 
      flexDirection: "column", 
      justifyContent: "center", 
    }}>
      {colors.map((color) => (
        <Box 
          key={color.color}  
          onClick={() => handleSetSideBarNoteColor(color.color)} 
          sx={{ 
            backgroundColor: `${color.color}`, 
            width: "30px", 
            borderRadius: "50%", 
            height: "30px", 
            border: "0.5px solid gray", 
            mb: "7px", 
            cursor: "pointer", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center"  ,'&:hover':{
              backgroundColor:`${color.color}`
            }
          }}
        />
      ))}
    </Box>
  </Grid>
  <Grid item xs={10}>
    <Box sx={{ 
      display: "flex", 
      justifyContent: "center",  
      height: "100%", 
      width: "100%", 
      alignItems: "center", 
    }}>
      <TextField 
        value={newNote.text} 
        name="text" 
        onChange={handleChangeTextField}
        multiline
        rows={12}
        placeholder="Type here..."
        variant="outlined"
        InputProps={{
          disableUnderline: true,
          style: {
            border: 'none',
            padding: '5px', 
          },
          inputProps: { minLength: 5, maxLength: 550 }
        }}
        sx={{
          width: "100%",  
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
          <Button onClick={handleAddNotes} variant='contained'  disableElevation  sx={{ borderRadius: "1rem", backgroundColor: `${sideBarNoteColor}`, textTransform: "none", width: "120px", '&:hover': {
          backgroundColor: `${sideBarNoteColor}cc`,boxShadow:2 
        },boxShadow:2, mt:2  }} >
     
          <Typography color="black" sx={{fontSize: "19px"}}>Add</Typography></Button>
          </Box>
          <Footer/>
        
        </Box>
      </Box>
    </>
  )
}

export default Side
