import Head from "next/head";
import Navbar from "../navbar/navbar";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Rohaizi Mohamed</title>
      </Head>
      <Navbar/>
      {children}
    </div>
  );
}

export default Layout;
