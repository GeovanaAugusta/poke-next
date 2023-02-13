import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href={"/images/favicon.ico"}/>
      <title>PokeNext</title>
    </Head>
    <NavBar />
    <main>{children}</main>
    <Footer />
    </>
  )
}