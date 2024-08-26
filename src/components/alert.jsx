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
<Box sx={{maxWidth:"400px",height:"80px",maxHeight:"150px",backgroundColor:alert.background,borderRadius:"0.5rem",p:2,color:"white",display:"flex",alignItems:"center",justifyContent:"center",color:"text.primary"}}>
   {
    alert.positive ? (
      <CheckCircleOutlineOutlinedIcon/>
    ) : (
      <ErrorOutlineOutlinedIcon/>
    )
   }
    <Typography sx={{fontWeight:"bold"}}>{alert.message}</Typography>
  
</Box>
<Box onClick = {handleClick} sx={{position:"absolute",top:0,right:0,cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"0.3rem",color:"white"}}> <CloseIcon  /></Box>

  </>
  )
}

export default Alert
