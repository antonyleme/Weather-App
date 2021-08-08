import React from "react";
import {
  Container,
  Box,
  Flex,
  Heading,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import NewCityModal from "~/components/NewCityModal";
import CitiesCarousel from "~/components/CitiesCarousel";
import CityData from "~/components/CityData";

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW={["100vw", "80%", "1600px"]} py="5" px="0">
      <Box bg="gray.50" p={["2", "5", "10"]} borderRadius="10">
        <Flex
          flexDirection={["column", "row"]}
          mb="5"
          alignItems={["flex-start", "flex-end"]}
          justifyContent="space-between"
        >
          <Heading as="h1" lineHeight="1em" color="gray.700">
            Previsão do tempo
          </Heading>
          <Button
            colorScheme="blue"
            size="sm"
            leftIcon={<AddIcon />}
            onClick={onOpen}
          >
            Cidade
          </Button>
          <NewCityModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Flex>

        <CitiesCarousel />

        <CityData />
      </Box>
    </Container>
  );
}
