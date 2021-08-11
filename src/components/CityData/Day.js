import React from "react";
import { Box, Text, Stack, Image } from "@chakra-ui/react";
import { getMax, getMin } from "~/utils";

export default function Component({ day }) {
  return (
    <Box
      borderRadius="10px"
      p="5"
      border="1px solid"
      borderColor="gray.100"
      spacing="10"
    >
      <Text mb="2" fontSize="0.8em">
        {day[0]}
      </Text>
      <Text lineHeight="1.2em" fontSize="0.9em">
        {day[1].resumo || day[1].manha.resumo}
      </Text>
      <Stack direction="row" alignItems="center">
        <Box>
          <Image
            width="50px"
            height="auto"
            src={day[1].icone || day[1].manha.icone}
          />
        </Box>
        <Box fontSize="0.8em">
          <Text fontWeight="light">
            Máxima {day[1].temp_max || getMax(day[1])}°
          </Text>
          <Text fontWeight="light">
            Mínima {day[1].temp_min || getMin(day[1])}°
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
