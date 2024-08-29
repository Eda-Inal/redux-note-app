import React, {useEffect} from 'react'
import { Box,Typography,Tooltip} from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { setFilterColor,setRemoveFilterColor,setAlert } from '../redux/noteSlice';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

function FilterColors() {
    const dispatch = useDispatch();
    const { colors,filterColorAlert } = useSelector((state) => state.note);
    const handleFilteredcolor = (color) => {
      dispatch(setFilterColor(color))
    }
    const handleRemoveFilter = ()=> {
dispatch(setRemoveFilterColor())
    }

  useEffect(() => {
    if (filterColorAlert) {
      dispatch(setAlert({
        show: true,
        message: "No note with the selected color was found",
        background: "error.main",
        positive: false
      }));
    }
  }, [filterColorAlert, dispatch]);
  
  return (
<Box sx={{display:"flex"}}>
<Box sx={{mr:{xs:0.2,sm:0.3,md:0.4,lg:0.5}}}>
<Typography>Filter by colors:</Typography>
</Box>
<Box sx={{  display: "flex"}}>
                  {
                    colors.map((color) => (
                      <Box key={color.color} onClick={() => handleFilteredcolor(color.color)}   sx={{ backgroundColor: `${color.color}`, width: "20px", borderRadius: "50%", height: "20px", border: "0.5px solid gray", mb: "7px", cursor: "pointer",display:"flex",alignItems:"center",justifyContent:"center",mr:0.3,'&:hover':{
                        backgroundColor:`${color.color}aa`
                      } }}>
                   
                      </Box>
                    ))
                  }
                  <Tooltip title="remove filter">
                  <Box onClick = {handleRemoveFilter} sx={{width:"20px",height:"20px", borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>  
<HighlightOffRoundedIcon/>
                  </Box>
                  </Tooltip>
                  
                </Box>
</Box>
  )
}

export default FilterColors
