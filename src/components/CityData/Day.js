import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";

export default function Component() {
  return (
    <Box
      borderRadius="10px"
      p="5"
      border="1px solid"
      borderColor="gray.100"
      spacing="10"
    >
      <Text mb="2" fontSize="0.8em">
        Segunda, 03 de agosto
      </Text>
      <Text>Dia de sol</Text>
      <Stack direction="row" alignItems="center">
        <Text fontSize="2em">13°</Text>
        <Box fontSize="0.8em">
          <Text fontWeight="light">Máxima 29°</Text>
          <Text fontWeight="light">Mínima 13°</Text>
        </Box>
      </Stack>
    </Box>
  );
}
