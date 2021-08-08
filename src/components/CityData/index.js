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
import { CloseIcon } from "@chakra-ui/icons";
import Chart from "./Chart";
import Day from "./Day";
import Today from "./Today";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Component() {
  return (
    <Box mt="5" p="5" bg="white" borderRadius="10px">
      <Flex alignItems="center" justifyContent="space-between" mb="5">
        <Heading size="md" color="gray.700">
          New York
        </Heading>

        <IconButton size="sm" variant="ghost" icon={<CloseIcon />} />
      </Flex>

      <Box mb="5">
        <Today />

        <Grid gridTemplateColumns={["1fr", "1fr 1.2fr"]} mt="5" gap="10">
          <Box>
            <Text fontWeight="semibold" mb="2">
              Variação de temperatura por dia
            </Text>
            <Chart data={data} />
          </Box>

          <Box>
            <Grid
              gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
              gap="5"
            >
              <Day />
              <Day />
              <Day />
              <Day />
              <Day />
              <Day />
            </Grid>
          </Box>
        </Grid>
      </Box>

      <Box textAlign="right">
        <Button size="sm" colorScheme="blue">
          Ver cidade
        </Button>
      </Box>
    </Box>
  );
}
