import {
  Stack,
  FormControl,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Flex
      p="5"
      bg={useColorModeValue("rgba(255,225,253, 0.9)", "rgba(7,7,8, 0.8)")}
      borderRadius="5px"
      w="100%"
      m="2"
    >
      <FormControl>
        <Stack direction={"column"} spacing="5">
          <Input variant="flushed" id="name" placeholder="Name" />
          <Input
            variant="flushed"
            id="email"
            type="email"
            placeholder="Email"
          />
          <Textarea variant="flushed" placeholder="Your Message" />
          <Button variant="ghost">Submit</Button>
        </Stack>
      </FormControl>
    </Flex>
  );
};

export default ContactForm;
