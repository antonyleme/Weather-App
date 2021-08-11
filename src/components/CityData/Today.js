import React from "react";
import { Box, Text, Grid, Image, Stack } from "@chakra-ui/react";
import Period from "./Period";
import { getMax, getMin } from "~/utils";

export default function Component({ day }) {
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
            <Image width="70px" height="auto" src={day[1].manha.icone} />
          </Box>
          <Box fontSize="0.9em">
            <Text fontWeight="light">Máxima {getMax(day[1])}°</Text>
            <Text fontWeight="light">Mínima {getMin(day[1])}°</Text>
          </Box>
        </Stack>
      </Box>

      <Box pl={["0", "10"]}>
        <Grid gridTemplateColumns={["1fr", "1fr 1fr 1fr"]}>
          <Period name="Manhã" period={day[1].manha} />
          <Period name="Tarde" period={day[1].tarde} />
          <Period name="Noite" period={day[1].noite} />
        </Grid>
      </Box>
    </Grid>
  );
}
