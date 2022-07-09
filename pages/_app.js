import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";

import theme from "../theme/theme";

import "@fontsource/poppins/600.css";
import "@fontsource/quicksand/300.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/m.png" />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
