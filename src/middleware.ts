import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages:{
        signIn:"/auth/signin",
        signOut:"/auth/signout",
        error:"/auth/error",
        verifyRequest:"/auth/verify-request",
        newUser:"/auth/new-user",
    }
})