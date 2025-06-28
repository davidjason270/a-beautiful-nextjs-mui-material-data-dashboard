import React from "react";
import { useSession, signIn, signOut } from 'next-auth/react';
import { Avatar, Button, Typography } from "@mui/material";

export default function Login()
{
    const {data:session} = useSession();
    if(session){
        return <>
            <Button variant="contained" color="error" onClick={()=>signOut()} >Logout</Button>
        </>
    }
    return <>
        <Typography variant="h2">Please, login</Typography>
        <Button variant="contained" color="success" onClick={()=>signIn()} >Login</Button>
    </>
}