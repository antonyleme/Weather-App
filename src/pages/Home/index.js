import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import Layout from "~/layout";

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeIndex, setActiveIndex] = useState(-1);
  const cities = useSelector((state) => state.cities.data);

  useEffect(() => {}, []);

  return (
    <Layout>
      <Flex
        flexDirection={"row"}
        mb="5"
        alignItems={["flex-start", "flex-end"]}
        justifyContent="space-between"
      >
        <Heading as="h1" fontSize="1.7em" lineHeight="1em" color="gray.700">
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

      <CitiesCarousel
        onOpenNewCity={onOpen}
        cities={cities}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      {activeIndex !== -1 && (
        <CityData city={cities[activeIndex]} close={() => setActiveIndex(-1)} />
      )}
    </Layout>
  );
}
