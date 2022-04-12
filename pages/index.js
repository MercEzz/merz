import Head from "next/head";
import HomePage from "../components/homePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>MerZ</title>
      </Head>
      <HomePage />
    </>
  );
}
