import React from "react";
import { useSession, signIn, signOut } from 'next-auth/react';
import { Avatar, Box, Button, Typography } from "@mui/material";
import Login from "@/components/Login";

const SignIn = ()=>{
    const {data:session} = useSession();
    return (
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <h2>{session ? "Thank you for logging in" : "Please, login"}</h2>
            <Login/>
        </Box>
    );
}

export default SignIn;