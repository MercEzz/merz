import { Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

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
        <Heading mt="8rem" as="h1" fontSize={{ base: "4xl", md: "6xl" }}>
          Mitesh Virash
        </Heading>
        <Text p="2">You are worth more than second thoughts and maybes</Text>
      </Flex>
    </>
  );
}
