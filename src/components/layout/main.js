import Head from "next/head";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Rohaizi Mohamed</title>
      </Head>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
