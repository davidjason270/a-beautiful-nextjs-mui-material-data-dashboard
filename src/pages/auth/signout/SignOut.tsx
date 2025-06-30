import React from "react";
import { useSession, signIn, signOut } from 'next-auth/react';
import { Avatar, Button, Typography } from "@mui/material";

export default function SignOut()
{
    return <>
        <Typography variant="h2">SignOut</Typography>
    </>
}