import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Grid,
  IconButton,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import Chart from "./Chart";
import Day from "./Day";
import DaySkeleton from "./DaySkeleton";
import Today from "./Today";
import TodaySkeleton from "./TodaySkeleton";
import { removeCity } from "~/store/modules/cities/actions";
import { useDispatch } from "react-redux";
import { updateTemperatures } from "~/store/modules/temperatures/actions";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Component({ city, close }) {
  const dispatch = useDispatch();
  const remove = () => {
    close();
    dispatch(removeCity(city.id));
  };
  const [days, setDays] = useState([]);
  const toast = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://apiprevmet3.inmet.gov.br/previsao/${city.id}`
        );

        const newDays = [];
        for (const day in data[city.id]) {
          newDays.push([day, data[city.id][day]]);
        }

        dispatch(updateTemperatures(newDays));
        setDays(newDays);
        setLoading(false);
      } catch (e) {
        toast({
          title: "Ops.",
          description: e.response.data.error,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    }
    if (city) getData();
  }, [city]);

  return (
    <Box mt="5" p="5" bg="white" borderRadius="10px">
      <Flex alignItems="center" justifyContent="space-between" mb="5">
        <Heading size="md" color="gray.700">
          {city.name}
        </Heading>

        <Stack direction="row" spacing="1" alignItems="center">
          <Button onClick={remove} colorScheme="red" variant="ghost" size="sm">
            Remover cidade
          </Button>
          <IconButton
            onClick={close}
            size="sm"
            variant="ghost"
            icon={<CloseIcon />}
          />
        </Stack>
      </Flex>

      <Box mb="5">
        {!loading ? <Today day={days[0]} /> : <TodaySkeleton />}

        <Grid gridTemplateColumns={["1fr", "1fr 1.2fr"]} mt="5" gap="10">
          <Box>
            <Text fontWeight="semibold" mb="2">
              Variação de temperatura por dia
            </Text>
            <Chart days={days} />
          </Box>

          <Box>
            <Grid
              gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
              gap="5"
            >
              {!loading
                ? days.slice(1).map((day) => <Day day={day} />)
                : Array.from({ length: 6 }).map(() => <DaySkeleton />)}
            </Grid>
          </Box>
        </Grid>
      </Box>

      <Box textAlign="right">
        <Link to="/resume">
          <Button size="sm" colorScheme="blue">
            Ver max/min
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
