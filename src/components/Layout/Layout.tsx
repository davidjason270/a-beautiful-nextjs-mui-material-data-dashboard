import { useSession } from "next-auth/react";
import SideMenu from "@/components/SideMenu";
import Footer from "@/components/Footer";
import scss from './Layout.module.scss';
import React from 'react';
import Head from "next/head";

const Layout = (props: any)=>{
    const {data:session} = useSession();

    return (
        <>
            <Head>
                <title>Apersonel - Data Dashboard</title>
                <meta name="description" content="Data Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={scss.layout} style={{padding: session ? "0 24px 0 80px" : 0}}>
                {session && <SideMenu/>}
                {props.children}
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout;