import {
  Flex,
  useColorModeValue,
  Box,
  Text,
  Icon,
  HStack,
  Divider,
  VStack,
  Link,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { FiPhone, FiMail, FiGithub } from "react-icons/fi";

const ContactDetails = () => {
  return (
    <Flex
      p="5"
      bg={useColorModeValue("rgba(255,225,253, 0.9)", "rgba(7,7,8, 0.8)")}
      borderRadius="5px"
      flexDir="column"
      w="100%"
      m="2"
    >
      <Text p="2">Contact Details</Text>
      <Divider />
      <VStack fontSize={{ base: "sm", md: "md" }} alignItems="flex-start">
        <HStack p="2">
          <Icon w="1.5rem" h="1.5rem" as={FaLinkedin} />
          <Link
            href="https://www.linkedin.com/in/miteshvirash/"
            px="2"
            isExternal
          >
            @Mitesh-virash
          </Link>
        </HStack>
        <HStack p="2">
          <Icon w="1.5rem" h="1.5rem" as={FiGithub} />
          <Link href="https://github.com/MercEzz" px="2" isExternal>
            @MercEzz
          </Link>
        </HStack>
        <HStack p="2">
          <Icon w="1.5rem" h="1.5rem" as={FiPhone} />
          <Link href="tel: +91 8692995854" px="2">
            +91 - 8692995854
          </Link>
        </HStack>
        <HStack p="2">
          <Icon w="1.5rem" h="1.5rem" as={FiMail} />
          <Link href="mailto: miteshkvirash@gmail.com" px="2">
            miteshkvirash@gmail.com
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default ContactDetails;
