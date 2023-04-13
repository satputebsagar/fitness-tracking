import React from 'react'
import {useNavigate} from 'react-router-dom';
import {Typography,Button,Box} from "@mui/material";

const SidebarCard = ({value,text,icon}) => {
    const navigate=useNavigate();
    const buttonClickHandl=(e)=>{
        navigate(`/${value}`)
    }
  return (
    <Button onClick={buttonClickHandl}

        sx={{
            width:{xs:'100%',lg:'90%'},
        }}
        >
            <Box
            sx={{
                display:'flex',
                alignItems:'center',
                flexDirection:{xs:'column',lg:'row'}
            }} 
            >
                <Box>
                    {icon}
                </Box>
                <Typography sx={{fontSize:{xs:'10px',md:'13px',lg:'15.5px'}}}>{text}</Typography>
            </Box>

        </Button>
  )
}

export default SidebarCard