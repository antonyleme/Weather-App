import React from "react";
import { Box, Text, Stack, Skeleton } from "@chakra-ui/react";

export default function Component({ name }) {
  return (
    <Box fontSize="0.8em" mb={["5", "0"]}>
      <Text fontWeight="semibold">{name}</Text>
      <Skeleton h="15px" w="70px" mb="1" />
      <Stack direction="row" spacing="5" alignItems="center">
        <Box>
          <Skeleton w="50px" h="50px" />
        </Box>
        <Box fontSize="0.9em">
          <Skeleton h="15px" mb="1" w="90px" />
          <Skeleton h="15px" w="90px" />
        </Box>
      </Stack>
    </Box>
  );
}
