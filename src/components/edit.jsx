import React from 'react';
import { Box, Typography, InputBase, Grid, Button, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setEditNoteChange, setEdittedNoteToNotes, setChangeEditNoteColor, setEditCancel, setAlert } from '../redux/noteSlice';

function Edit() {
  const dispatch = useDispatch();
  const { editNote, colors } = useSelector((state) => state.note);

  const handleChangeTextField = (e) => {
    const { name, value } = e.target;
    dispatch(setEditNoteChange({ key: name, value }));
  };

  const handleAddEdit = (id) => {
    // Validation
    if (editNote.title.length > 21) {
      dispatch(setAlert({ show: true, message: "Title should be 21 characters or less.", background: "error.main", positive: false }));
      return;
    }

    if (editNote.text.length < 5 || editNote.text.length > 550) {
      dispatch(setAlert({ show: true, message: "Text should be between 5 and 550 characters.", background: "error.main", positive: false }));
      return;
    }

    dispatch(setEdittedNoteToNotes(id));
    dispatch(setAlert({ show: true, message: "Note has been successfully updated.", background: "success.main", positive: true }));
  };

  const handleChangeColor = (color) => {
    dispatch(setChangeEditNoteColor(color));
  };

  const handleCancel = () => {
    dispatch(setEditCancel());
  };

  return (
    <Box sx={{ height: "450px", mx: "auto", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "background.default", p: 2, borderRadius: "1rem", mt: 2, border: "0.5px gray solid", boxShadow: 2 }}>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <InputBase
            value={editNote.title}
            name='title'
            onChange={handleChangeTextField}
            placeholder='Title'
            sx={{
              height: '35px',
              width: '90%',
              borderRadius: '1rem',
              border: `2px ${editNote.color} solid`,
              boxShadow: 1,
              paddingLeft: '10px',
              '& input': {
                padding: 0,
              },
            }}
          />
        </Box>
        <Box sx={{ height: 300, borderRadius: "1rem", width: "90%", mt: 2, mx: "auto", border: `2px ${editNote.color} solid`, boxShadow: 3 }}>
          <Grid container>
            <Grid xs={2}>
              <Box sx={{ height: 300, width: "90%", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                {colors.map((color) => (
                  <Box key={color.color} onClick={() => handleChangeColor(color.color)} sx={{ backgroundColor: `${color.color}`, width: "30px", borderRadius: "50%", height: "30px", border: "0.5px solid gray", mb: "7px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid xs={10} sx={{ position: "relative", pl: 1 }}>
              <TextField
                value={editNote.text}
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
                }}
                sx={{
                  width: '100%',
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
                  color: "black",
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", width: "95%", justifyContent: "flex-end" }}>
          <Button onClick={() => handleAddEdit(editNote.id)} variant='contained' disableElevation sx={{ borderRadius: "0.5rem", backgroundColor: `${editNote.color}`, textTransform: "none", width: "90px", '&:hover': { backgroundColor: `${editNote.color}cc`, boxShadow: 2 }, boxShadow: 2, mt: 2, mr: 1 }}>
            <Typography sx={{ fontSize: "19px", color: "white" }}>Add</Typography>
          </Button>
          <Button onClick={handleCancel} variant='contained' disableElevation sx={{ borderRadius: "0.5rem", backgroundColor: "error.main", textTransform: "none", width: "90px", '&:hover': { backgroundColor: "error.main", boxShadow: 2 }, boxShadow: 2, mt: 2 }}>
            <Typography sx={{ fontSize: "19px", color: "white" }}>Cancel</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Edit;

