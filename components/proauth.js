import { GridItem, Flex, Image, Text, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Flex);

const ProAuth = () => {
  const img = "/images/react-auth.png";
  const title = "Authentication system";
  const sub_title = "React.js, React-hooks, Firebase";
  const desc =
    "Created an authentication system that isconnected to a database of google's Firebase,In this project, the token is generated withJWToken, and the token is given an expirationperiod which asks the user to log in again. It alsohas a password reset option which takes thetoken and updates the password on the token'sverification.";
  const ghlink = "https://github.com/MercEzz/react-auth";

  const [disModal, setDisModal] = useState(false);

  const disDesc = () => {
    setDisModal(!disModal);
  };

  return (
    <>
      <MotionBox
        m="2"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, type: "just" }}
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
              <Flex px="2" textAlign="justify">
                {desc}
              </Flex>
              <Flex px="2">
                <Link href={ghlink} isExternal>
                  {ghlink}
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

export default ProAuth;
