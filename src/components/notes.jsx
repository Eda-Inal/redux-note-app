import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { setDeleteNotes, setEditNote, setAlert } from '../redux/noteSlice';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { FaEdit } from "react-icons/fa";

function Notes() {
  const dispatch = useDispatch();
  const { isDarkTheme, allNotes, filterNotes } = useSelector((state) => state.note);

  const handleDelete = (id) => {
    dispatch(setDeleteNotes(id));
    dispatch(setAlert({ show: true, message: "The note has been removed.", background: "success.main", positive: true }));
  };

  const notesToDisplay = filterNotes.length > 0 ? filterNotes : allNotes;

  const handleEditNote = (id) => {
    dispatch(setEditNote(id));
  };

  return (
    <>
      <Box sx={{ width: "90%", mx: "auto", mt: 1 }}>
        <Grid container spacing={2}>
          {notesToDisplay.length > 0 ? (
            notesToDisplay.map((note, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box
                  sx={{
                    position: "relative",
                    cursor: "pointer",
                    backgroundColor: isDarkTheme ? "background.default" : note.color,
                    height: { xs: 200, sm: 220, md: 250, lg: 270 },
                    borderRadius: "1rem",
                    border: isDarkTheme ? `2px solid ${note.color}` : "none",
                    transition: "transform 0.3s, height 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      height: 450,
                      mt:{xs:2,sm:1}
                    },
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", width: "95%", mx: "auto", height: "100%" }}>
                    <Box sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}>
                      <Typography sx={{ fontSize: "20px" }}>{note.title}</Typography>
                      <Box onClick={() => handleDelete(note.id)} sx={{ cursor: "pointer" }}>
                        <DeleteIcon sx={{ color: isDarkTheme ? note.color : "#474748", ":hover": { color: "#656568" } }} />
                      </Box>
                    </Box>
                    {/* Middle area */}
                    <Box
                      sx={{
                        width: "95%",
                        mx: "auto",
                        overflow: "hidden",
                        flexGrow: 1,
                        maxHeight: "calc(100% - 60px)",
                        transition: "max-height 0.3s",
                        "&:hover": { maxHeight: "calc(100% - 50px)" },
                        paddingBottom: "12px", 
                      }}
                    >
                      <Typography sx={{ p: 1, fontSize: "15px" }}>
                        {note.textarea}
                      </Typography>
                    </Box>
                    {/* Bottom area */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 10,
                        left: "5%",
                        right: "5%",
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: isDarkTheme ? "background.default" : note.color,
                        paddingTop: "8px", 
                      }}
                    >
                      <Typography>{note.date}</Typography>
                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Box onClick={() => handleEditNote(note.id)} sx={{ color: isDarkTheme ? note.color : "#474748", cursor: "pointer", ":hover": { color: "#656568" } }}>
                          <FaEdit size={20} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))
          ) : (
            <Box
            sx={{
              height: "70vh", 
              display: "flex",
              alignItems: "center", 
              justifyContent: "center", 
              textAlign: "center",
              width:"100%"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "auto", 
                maxWidth: "90%", 
                color: "disabled.main", 
              }}
            >
              <EditNoteIcon sx={{ fontSize: "80px", color: "#B0B0B0" }} /> 
              <Typography variant='h6' sx={{ color: "#B0B0B0" }}>
              Add some notes to get started!
              </Typography>
            </Box>
          </Box>
          
          
          )}
        </Grid>
      </Box>
    </>
  );
}

export default Notes;
