import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";

import theme from "../theme/theme";

import "@fontsource/poppins/600.css";
import "@fontsource/quicksand/300.css";
import Head from "next/head";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/m.png" />
      </Head>
      <ChakraProvider theme={theme}>
        <motion.div key={router.route}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
