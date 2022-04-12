import {
  Text,
  Box,
  chakra,
  Avatar,
  Heading,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import Image from "next/image";
import "../public/images/merz.jpg";

// const MotionBox = motion(Box);

const Bio = () => {
  return (
    <Box
      p="2"
      bg={useColorModeValue("rgba(255,225,253, 0.8)", "rgba(7,7,8, 0.8)")}
      borderRadius="5px"
    >
      <Heading textAlign="left" p="4" fontSize="lg">
        Personal Details
      </Heading>
      <Divider />

      <Box display="flex" flexDir={{ base: "column", lg: "row" }} m="2" p="2">
        <Box p={2} px={5}>
          <Avatar size="2xl" src="/images/merz.jpg" />
        </Box>
        <Box display="flex" flexDir="column">
          <Text textAlign="left" fontSize="x-large" m="2">
            Mitesh Virash
          </Text>
          <Text
            textAlign={"justify"}
            fontSize={{ base: "sm", md: "md" }}
            letterSpacing="wide"
            p={2}
          >
            Hello, my name is Mitesh Virash. I&apos;m a young developer from
            India&apos;s Mumbai (Bombay). I&apos;m now working on front-end web
            development. I enjoy creating websites and have done it in the past.
            with Javascript&apos;s framework that is React.js and learnt about
            some of its framework and have built projects with Chakra-ui which
            is a UI component to design webpages. In addition, I am seeking for
            a variety of chances that will allow me to expand my education and
            job experience. Aside from that, I enjoy doing a variety of things
            in my spare time, including online gaming, web series, music, casual
            coding, reading books, and spending time with my friends and family.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Bio;
