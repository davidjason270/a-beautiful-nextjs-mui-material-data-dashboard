import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { createContext } from "vm";


export type ThemetoggleProps = {
    ColorModeContext: React.Context<{toggleColorMode:()=> void; }>,
}


const Themetoggle = (props: ThemetoggleProps)=>{
    const mobileCheck = useMediaQuery('min-width:500px');
    const { ColorModeContext = React.createContext({ toggleColorMode:()=>{} })} = props;
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return(
        <>
            {mobileCheck && (
                <Typography>{theme.palette.mode}</Typography>
            )}
           
            <IconButton sx={{ mr: 2 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
        </>
    );
}

export default Themetoggle;