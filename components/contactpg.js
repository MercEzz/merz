import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ContactDetails from "./contactDetails";
import ContactForm from "./contactForm";

const MotionBox = motion(Box);

const ContactPg = () => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const hdvariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <Flex
      align="center"
      w="100%"
      h="100%"
      px={{ base: "1rem", md: "3rem" }}
      pt={{ base: "5rem", md: "3rem" }}
      pb={{ base: "2rem", md: "2rem" }}
      overflow="hidden"
      flexDir="column"
      css={{
        backdropFilter: "blur(15px)",
      }}
    >
      <MotionBox
        w="100%"
        justify="center"
        variants={hdvariants}
        initial="hidden"
        animate="enter"
        transition={{ duration: 1, type: "just" }}
      >
        <Heading textAlign={{ base: "left", md: "center" }} mt="2rem" mb="2rem">
          Contact
        </Heading>
      </MotionBox>
      <MotionBox
        flexDir="column"
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ duration: 1, type: "just" }}
        px={{ base: "0", md: "10rem" }}
        w="100%"
      >
        <Flex
          flexDir={{ base: "column-reverse", md: "row" }}
          w="100%"
          p={5}
          justifyContent="center"
        >
          <ContactForm />
          <ContactDetails />
        </Flex>
      </MotionBox>
    </Flex>
  );
};

export default ContactPg;
