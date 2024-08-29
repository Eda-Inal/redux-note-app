import React from 'react';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { setAlertClose } from '../redux/noteSlice';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

function Alert() {
    const dispatch = useDispatch();
    const { alert } = useSelector((state) => state.note);

    const handleClick = () => {
        dispatch(setAlertClose());
    };

    return (
        <Box 
            sx={{
                maxWidth: "500px",
                backgroundColor: alert.background,
                borderRadius: "12px",
                px: 3,
                py:2,
                color: "white",
                display: "flex",
                alignItems: "center",
                position: "relative", 
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)",
            }}
        >
            <Box 
                sx={{
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    borderRadius: "50%",
                    backgroundColor: alert.positive ? "rgba(0, 128, 0, 0.15)" : "rgba(182, 0, 0, 0.15)", 
                    p: 1,
                    mr: 2,
                }}
            >
                {alert.positive ? (
                    <CheckCircleOutlineOutlinedIcon sx={{ color: "green" }} />
                ) : (
                    <ErrorOutlineOutlinedIcon sx={{ color: "#B60000" }} />
                )}
            </Box>
            
            <Typography sx={{ flexGrow: 1 }}>{alert.message}</Typography>
            
            <CloseIcon 
                onClick={handleClick} 
                sx={{
                    position: "absolute", 
                    top: "5px", 
                    right: "5px",
                    cursor: "pointer",
                    fontSize: "20px", 
                    color: "rgba(255, 255, 255, 0.7)",
                    "&:hover": {
                        color: "rgba(255, 255, 255, 1)",
                    },
                }}
            />
        </Box>
    );
}

export default Alert;

