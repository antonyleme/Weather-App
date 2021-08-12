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
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import Chart from "./Chart";
import Day from "./Day";
import DaySkeleton from "./DaySkeleton";
import Today from "./Today";
import TodaySkeleton from "./TodaySkeleton";
import ConfirmDelete from "./ConfirmDelete";
import { useDispatch } from "react-redux";
import { updateTemperatures } from "~/store/modules/temperatures/actions";
import axios from "axios";
import { Link } from "react-router-dom";
import CityDataService from "~/services/city.service";
import TemperatureLogDataService from "~/services/temperature-log.service";
import moment from "moment";

export default function Component({ city, activeIndex, close }) {
  const dispatch = useDispatch();

  const remove = () => {
    close();
    CityDataService.delete(city.key);
  };

  const [days, setDays] = useState([]);
  const toast = useToast();
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://apiprevmet3.inmet.gov.br/previsao/${city.data.id}`
        );

        const newDays = [];
        for (const day in data[city.data.id]) {
          newDays.push([day, data[city.data.id][day]]);
        }

        const todayTemperatures = {
          data: moment().format("DD/MM/YYYY"),
          temperatures: data[city.data.id][moment().format("DD/MM/YYYY")],
        };

        TemperatureLogDataService.create(todayTemperatures);

        await CityDataService.update(city.key, {
          "today-temperatures": todayTemperatures,
        });

        dispatch(updateTemperatures(newDays));
        setDays(newDays);
        setLoading(false);
      } catch (e) {
        console.log(e);
        toast({
          title: "Ops",
          description: e.response.data.error,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    }
    if (city) getData();
  }, [activeIndex]);

  useEffect(() => {
    console.log(city);
  }, [city]);

  return (
    <Box mt="5" p="5" bg="white" borderRadius="10px">
      <Flex alignItems="center" justifyContent="space-between" mb="5">
        <Heading size="md" color="gray.700">
          {city.data.nome}
        </Heading>

        <Stack direction="row" spacing="1" alignItems="center">
          <Button
            onClick={() => onOpen()}
            colorScheme="red"
            variant="ghost"
            size="sm"
          >
            Remover cidade
          </Button>
          <ConfirmDelete onClose={onClose} isOpen={isOpen} submit={remove} />
          <IconButton
            onClick={close}
            size="sm"
            variant="ghost"
            icon={<CloseIcon />}
          />
        </Stack>
      </Flex>

      <Box mb="5">
        {!loading && city.data ? (
          <Today day={city.data["today-temperatures"].temperatures} />
        ) : (
          <TodaySkeleton />
        )}

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
