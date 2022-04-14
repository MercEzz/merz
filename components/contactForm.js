import {
  Container,
  Stack,
  FormControl,
  Box,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box
      p="5"
      bg={useColorModeValue("rgba(255,225,253, 0.8)", "rgba(7,7,8, 0.8)")}
      borderRadius="5px"
      w={{ base: "240px", md: "xl" }}
      // maxW="450px"
      mt={{ base: "5", md: "0" }}
      mb="8"
    >
      <FormControl>
        <Stack direction={"column"} spacing="5">
          <Box>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input variant="flushed" id="name" placeholder="Name" />
          </Box>
          <Box>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              variant="flushed"
              id="email"
              type="email"
              placeholder="Email"
            />
          </Box>
          <Box>
            <FormLabel>Your Message</FormLabel>
            <Textarea variant="flushed" placeholder="Your Message" />
          </Box>
          <Button variant="ghost">Submit</Button>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default ContactForm;
