import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";

export default function Component() {
  return (
    <Box fontSize="0.8em" mb={["5", "0"]}>
      <Text fontWeight="semibold">Manhã</Text>
      <Text mt="2">Nublado</Text>
      <Stack direction="row" spacing="5" alignItems="center">
        <Text fontSize="3em" lineHeight="1em">
          13°
        </Text>
        <Box fontSize="0.9em">
          <Text fontWeight="light">Máxima 29°</Text>
          <Text fontWeight="light">Mínima 13°</Text>
        </Box>
      </Stack>
    </Box>
  );
}
