import React from "react";
import { Box, Text, Stack, Image } from "@chakra-ui/react";

export default function Component({ name, period }) {
  return (
    <Box fontSize="0.8em" mb={["5", "0"]}>
      <Text fontWeight="semibold">{name}</Text>
      <Text mt="1" mb="2">
        {period.resumo}
      </Text>
      <Stack direction="row" spacing="5" alignItems="center">
        <Box>
          <Image width="50px" height="auto" src={period.icone} />
        </Box>
        <Box fontSize="0.9em">
          <Text fontWeight="light">Máxima {period.temp_max}°</Text>
          <Text fontWeight="light">Mínima {period.temp_min}°</Text>
        </Box>
      </Stack>
    </Box>
  );
}
