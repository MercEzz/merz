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
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
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
      css={{
        backdropFilter: "blur(15px)",
      }}
    >
      <MotionBox
        flexDir="column"
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ duration: 0.5, type: "just" }}
        px={{ base: "0", md: "10rem" }}
        w="100%"
      >
        <Heading textAlign={{ base: "left", md: "center" }} mb="2rem">
          Contact
        </Heading>
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
