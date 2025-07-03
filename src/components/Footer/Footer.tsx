import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useSession } from "next-auth/react";
import Link from "next/link";
import scss from "./Footer.module.css"
import { Paper } from "@mui/material";


const Footer = ()=>{
    const {data:  session } = useSession();
    const theme = useTheme();

    const footerlink = styled(Link)`color:${theme.palette.text.primary}`;
    return (
        <footer className={scss.footer}>
            <Paper sx={{ width:"100%"}} color={"#262626"}>
                <ul role="menu">
                    <li><footerlink href={"/"}>Home</footerlink></li>
                    <li><footerlink href={"/dashboard/analytics"}>Analytics</footerlink></li>
                    <li><footerlink href={"/dashboard/profile"}>Profile</footerlink></li>
                    <li><footerlink href={"/dashboard/settings"}>Settings</footerlink></li>
                    <li><footerlink href={"/dashboard/#"}>Terms & Conditions</footerlink></li>
                    <li><footerlink href={"/#"}>Accessbility Statement</footerlink></li>
                </ul>
            </Paper>
        </footer>
    );
}

export default Footer;