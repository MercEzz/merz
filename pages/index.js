import { Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
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
          <Text as="span" color={useColorModeValue("purple", "purple.700")}>
            Mitesh
          </Text>
          Virash
        </Heading>
        <Text p="2">You are worth more than second thoughts and maybes</Text>
      </Flex>
    </>
  );
}
