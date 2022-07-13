import {
  Stack,
  FormControl,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const { name, email, msg } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Flex
      p="5"
      bg={useColorModeValue("rgba(255,225,253, 0.9)", "rgba(7,7,8, 0.8)")}
      borderRadius="5px"
      w="100%"
      m="2"
    >
      <FormControl>
        <form onSubmit={(e) => onSubmit(e)}>
          <Stack direction={"column"} spacing="5">
            <Input
              variant="flushed"
              id="name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              placeholder="Name"
            />
            <Input
              variant="flushed"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => onChange(e)}
            />
            <Textarea
              variant="flushed"
              placeholder="Your Message"
              name="msg"
              value={msg}
              onChange={(e) => onChange(e)}
            />
            <Button type="submit" variant="ghost">
              Submit
            </Button>
          </Stack>
        </form>
      </FormControl>
    </Flex>
  );
};

export default ContactForm;
