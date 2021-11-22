import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "../styles/reset.css";
import "slick-carousel/slick/slick.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      easing: "ease-in-out",
      duration: 800,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
