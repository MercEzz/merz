import { GridItem, Flex, Image, Text, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Flex);

const ProTuf = () => {
  const img = "/images/tufflam.png";
  const title = "Tufflam - freelance project";
  const sub_title = "React.js";
  const desc =
    "Working on a fully static large-scale website to showcase the company's products and their work with different large-scale industries.";
  const ghlink = "";

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

export default ProTuf;
