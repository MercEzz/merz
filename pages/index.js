import { Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";

const MotnHead = motion(Heading);
const MotnTxt = motion(Text);

const variants = {
  hidden: { opacity: 0, x: 0, y: -150 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const txtvariants = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>MerZ</title>
      </Head>
      <Flex
        h="100%"
        flexDir="column"
        align="center"
        justify="center"
        textAlign="center"
      >
        <MotnHead
          mt="8rem"
          as="h1"
          fontSize={{ base: "4xl", md: "6xl" }}
          variants={variants}
          initial="hidden"
          transition={{ duration: 1, type: "just" }}
          animate="enter"
        >
          <Text as="span" color={useColorModeValue("purple", "purple.700")}>
            Mitesh
          </Text>
          Virash
        </MotnHead>
        <MotnTxt
          p="2"
          variants={txtvariants}
          initial="hidden"
          transition={{ duration: 1, type: "just" }}
          animate="enter"
        >
          You are worth more than second thoughts and maybes
        </MotnTxt>
      </Flex>
    </>
  );
}
