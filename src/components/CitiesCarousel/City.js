import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

export default function Component({
  index,
  color,
  activeIndex,
  setActiveIndex,
}) {
  return (
    <Box onClick={() => setActiveIndex(index)}>
      <Flex
        flexDir="column"
        bg={color}
        p="5"
        height="150px"
        borderRadius="13px"
        cursor="pointer"
        transition="0.3s"
        backgroundPosition="center"
        _hover={{
          backgroundColor: color,
        }}
        _active={{
          background: color.replace("300", "200"),
          transition: "background 0s",
        }}
        mr="2"
        color="white"
        backgroundColor={
          index === activeIndex ? color : color.replace("300", "200")
        }
      >
        <Flex justifyContent="space-between" height="100%">
          <Flex flexDir="column" justifyContent="space-between">
            <Box>
              <Heading size="md" as="h2" textTransform="uppercase">
                New York
              </Heading>
              <Text fontWeight="light">The United States</Text>
            </Box>

            <Box mt="2" fontSize="0.9em">
              <Text lineHeight="1.2em">Mínima: 15°</Text>
              <Text lineHeight="1.2em">Máxima: 25°</Text>
            </Box>
          </Flex>

          <Text
            alignSelf="flex-end"
            fontSize="3em"
            lineHeight="1em"
            fontWeight="semibold"
          >
            13°
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
