import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Dashboard from "./dashboard";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import { useSession } from "next-auth/react";
import Login from "@/components/login";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const {data:session} = useSession();
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
         <Header />
          {
            session && (
              <>
                <SideMenu/>
                <Dashboard />
              </>
            )
          }
          <Login/>
        </main>
      </div>
    </>
  );
}
