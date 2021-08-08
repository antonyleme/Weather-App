import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Grid,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import Period from "./Period";

export default function Component() {
  return (
    <Grid gridTemplateColumns={["1fr", "auto 1fr"]} alignItems="center">
      <Box
        pr="10"
        display="inline-block"
        borderRight="1px solid"
        borderRightColor="gray.200"
        mb={["5", "0"]}
      >
        <Text fontWeight="semibold">Previsão para hoje</Text>
        <Stack direction="row" spacing="5" alignItems="center">
          <Text fontSize="3em">13°</Text>
          <Box fontSize="0.9em">
            <Text fontWeight="light">Máxima 29°</Text>
            <Text fontWeight="light">Mínima 13°</Text>
          </Box>
        </Stack>
      </Box>

      <Box pl={["0", "10"]}>
        <Grid gridTemplateColumns={["1fr", "1fr 1fr 1fr"]}>
          <Period />
          <Period />
          <Period />
        </Grid>
      </Box>
    </Grid>
  );
}
