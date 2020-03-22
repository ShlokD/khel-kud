import { Fragment } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import "../styles/main.css";

export default function Skeleton({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}
