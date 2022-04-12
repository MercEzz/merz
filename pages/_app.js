import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Header from "../components/Header";

import theme from "../theme/theme";
import { MotionConfig } from "framer-motion";

import "@fontsource/poppins/400.css";
import "@fontsource/quicksand/400.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <MotionConfig transition={{ duration: 0.5, type: "just" }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MotionConfig>
    </ChakraProvider>
  );
}

export default MyApp;
