import React from 'react'
import { Box, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useSelector,useDispatch } from 'react-redux';
import { setAlertClose } from '../redux/noteSlice';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

function Alert() {
    const dispatch = useDispatch()
    const {alert} = useSelector((state) => state.note)
    const handleClick = () => {
        dispatch(setAlertClose())
    }
  return (
<>
  <Box 
    sx={{
      maxWidth: "500px",
      maxHeight: "200px",
      backgroundColor: alert.background,
      borderRadius: "0.75rem",
      p: 3,
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start", 
      position: "relative", 
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    }}
  >
    {alert.positive ? (
      <CheckCircleOutlineOutlinedIcon sx={{ mr: 1, color: "green" }} />
    ) : (
      <ErrorOutlineOutlinedIcon sx={{ mr: 1, color: "#B60000" }} />
    )}
    <Typography sx={{ flexGrow: 1 }}>{alert.message}</Typography> 
    
    <Box 
      onClick={handleClick} 
      sx={{
        position: "absolute", 
        top: 0, 
        right: 0,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        width: "24px",
        height: "24px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        },
      }}
    > 
      <CloseIcon />
    </Box>
  </Box>
</>


  )
}

export default Alert
