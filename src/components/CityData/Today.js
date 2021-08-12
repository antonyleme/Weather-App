import React, { useEffect, useState } from "react";
import { Box, Text, Grid, Image, Stack } from "@chakra-ui/react";
import Period from "./Period";
import { getMax, getMin } from "~/utils";

export default function Component({ day }) {
  const [max, setMax] = useState();
  const [min, setMin] = useState();

  useEffect(() => {
    setMax(getMax(day));
    setMin(getMin(day));
  }, [day]);

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
            <Image width="70px" height="auto" src={day.manha.icone} />
          </Box>
          <Box fontSize="0.9em">
            <Text fontWeight="light">Máxima {max}°</Text>
            <Text fontWeight="light">Mínima {min}°</Text>
          </Box>
        </Stack>
      </Box>

      <Box pl={["0", "10"]}>
        <Grid gridTemplateColumns={["1fr", "1fr 1fr 1fr"]}>
          <Period name="Manhã" period={day.manha} />
          <Period name="Tarde" period={day.tarde} />
          <Period name="Noite" period={day.noite} />
        </Grid>
      </Box>
    </Grid>
  );
}
