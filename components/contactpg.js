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
import Scrollbar from "react-scrollbars-custom";
import ContactDetails from "./contactDetails";
import ContactForm from "./contactForm";

const MotionBox = motion(Box);

const ContactPg = () => {
  const variants = {
    hidden: { opacity: 0, x: 100, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <MotionBox
      w="100%"
      h="100%"
      variants={variants}
      transition={{ duration: 0.7, type: "just" }}
      initial="hidden"
      animate="enter"
      alignItems="center"
      css={{
        backdropFilter: "blur(15px)",
      }}
      px="3rem"
      py="5rem"
      overflow="auto"
    >
      <Heading textAlign="center" mb="2rem">
        Contact
      </Heading>
      <Flex
        justify="center"
        flexDir={{ base: "column-reverse", md: "row" }}
        px={{ base: "0", md: "10rem" }}
      >
        <ContactForm />
        <ContactDetails />
      </Flex>
    </MotionBox>
  );
};

export default ContactPg;
