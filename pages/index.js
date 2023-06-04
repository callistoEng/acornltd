import Head from "next/head";
import Home from "../components/Home/Home";

export default function AcornHome() {
  return (
    <>
      <Head>
        <title>Acorn Networks Limited</title>
        <meta name="description" content="Acorn Networks limited - Networking, Cabling and All IT Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  );
}
