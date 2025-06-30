import { Button, Typography } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";


const Login =()=>{
    const {data:session} = useSession();
    if(session){
        return <>
            <Button variant={'contained'} color={'error'} onClick={()=>signOut()}>Sign Out</Button>
        </>
    }

    return <>
        <Button variant={'contained'} color={'success'} onClick={()=>signIn()}>Sign In</Button>
    </>
}

export default Login;