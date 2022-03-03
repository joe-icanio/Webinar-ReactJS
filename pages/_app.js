import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js sample</title>
        <link rel="icon" href="/nextjs.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
