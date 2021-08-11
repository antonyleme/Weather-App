import React from "react";
import {
  Box,
  Flex,
  Button,
  Text,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Layout from "~/layout";
import { Link } from "react-router-dom";

export default function Page() {
  const { max, min } = useSelector((state) => state.temperatures);
  return (
    <Layout>
      <Flex alignItems="center" flexDir="column">
        <Heading mb="3">Temperaturas</Heading>
        <Stack direction="row" spacing="2">
          <Flex
            alignItems="flex-end"
            justifyContent="space-between"
            h="100px"
            w="280px"
            borderRadius="10"
            p="5"
            bg="yellow.300"
          >
            <Box alignSelf="flex-start">
              <Text>Máxima</Text>
              <Heading size="md">{max.local}</Heading>
            </Box>
            <Text lineHeight="1em" fontSize="3em">
              {max.temperature}°
            </Text>
          </Flex>

          <Flex
            alignItems="flex-end"
            justifyContent="space-between"
            h="100px"
            w="280px"
            borderRadius="10"
            p="5"
            bg="blue.300"
          >
            <Box alignSelf="flex-start">
              <Text>Mínima</Text>
              <Heading size="md">{min.local}</Heading>
            </Box>

            <Text lineHeight="1em" fontSize="3em">
              {min.temperature}°
            </Text>
          </Flex>
        </Stack>

        <Link to="/">
          <Button variant="ghost" mt="5">
            Voltar
          </Button>
        </Link>
      </Flex>
    </Layout>
  );
}
