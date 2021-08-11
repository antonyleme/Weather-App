import React from "react";
import { Box, Stack, Skeleton } from "@chakra-ui/react";

export default function Component() {
  return (
    <Box
      borderRadius="10px"
      p="5"
      border="1px solid"
      borderColor="gray.100"
      spacing="10"
    >
      <Skeleton h="15px" w="70px" mb="1" />
      <Skeleton h="20px" w="140px" mb="1" />
      <Stack direction="row" alignItems="center">
        <Box>
          <Skeleton w="50px" h="50px" />
        </Box>
        <Box fontSize="0.8em">
          <Skeleton h="15px" mb="1" w="90px" />
          <Skeleton h="15px" w="90px" />
        </Box>
      </Stack>
    </Box>
  );
}
