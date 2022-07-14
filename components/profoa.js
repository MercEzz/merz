import { GridItem, Flex, Image, Text, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Flex);

const ProFoa = () => {
  const img = "/images/foa.png";
  const title = "Food ordering app";
  const sub_title = "React.js, React-hooks";
  const desc =
    "Designed a food ordering application with Chakra-UI(UI Component) and implementedstate management, input control, and formvalidation with React-Hooks.";
  const ghlink = "https://github.com/MercEzz/Food-ordering-system";

  const [disModal, setDisModal] = useState(false);

  const disDesc = () => {
    setDisModal(!disModal);
  };

  return (
    <>
      <MotionBox
        whileHover={{ scale: 1.05 }}
        m="2"
        transition={{ duration: 0.5, type: "just" }}
      >
        <GridItem
          bg="rgba(255,225,253, 0.4)"
          _dark={{ bg: "rgba(7,7,8, 0.8)" }}
          width="100%"
          value={title}
          p="4"
        >
          <Image src={img} alt={title} />
          <Flex w="100%" pt="2" align="center" justify="space-between">
            <Text fontWeight="bold" p="2">
              {title}
            </Text>
            <Button onClick={disDesc} variant="ghost" size="sm" w="50%">
              &#8595;
            </Button>
          </Flex>
          {disModal ? (
            <Flex flexDir="column">
              <Text
                fontSize="sm"
                color="purple"
                _dark={{ color: "purple.300" }}
                px="2"
              >
                {sub_title}
              </Text>
              <Text px="2" textAlign="justify">
                {desc}
              </Text>
              <Flex px="2">
                <Link href={ghlink} isExternal>
                  @Github
                </Link>
              </Flex>
            </Flex>
          ) : (
            ""
          )}
        </GridItem>
      </MotionBox>
    </>
  );
};

export default ProFoa;
