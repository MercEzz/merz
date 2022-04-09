import { Box, useColorModeValue } from "@chakra-ui/react";
import { Head } from "next/Head";

const Layout = ({ children, title }) => {
  return (
    <>
      <Box
        as="main"
        direction="column"
        h="100vh"
        py="6"
        px="6"
        bgColor={useColorModeValue("#0e0f10", "#f1ffd6")}
        // bgImage={useColorModeValue("/images/redlily.png", "/images/bgblue.jpg")}
        bgImage="/images/bggif.gif"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        {title && (
          <Head>
            <title>{title} - Mitesh Virash</title>
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
          </Head>
        )}
        {children}
      </Box>
    </>
  );
};

export default Layout;
