import React from "react";
import { Box, Text, Grid, Stack, Skeleton } from "@chakra-ui/react";
import PeriodSkeleton from "./PeriodSkeleton";

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
          <Box>
            <Skeleton w="70px" h="70px" />
          </Box>
          <Box fontSize="0.9em">
            <Skeleton h="20px" mb="1" w="90px" />
            <Skeleton h="20px" w="90px" />
          </Box>
        </Stack>
      </Box>

      <Box pl={["0", "10"]}>
        <Grid gridTemplateColumns={["1fr", "1fr 1fr 1fr"]}>
          <PeriodSkeleton name="Manhã" />
          <PeriodSkeleton name="Tarde" />
          <PeriodSkeleton name="Noite" />
        </Grid>
      </Box>
    </Grid>
  );
}
