import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
  AddIcon,
} from "@chakra-ui/icons";
import City from "./City";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

const colors = [
  "green.300",
  "teal.300",
  "blue.300",
  "cyan.300",
  "purple.300",
  "pink.300",
  "red.300",
  "orange.300",
  "yellow.300",
];

export default function Page({ onOpenNewCity, activeIndex, setActiveIndex }) {
  const isMobile = useMediaQuery({ query: "(max-device-width: 768px)" });
  const [searchTerm, setSearchTerm] = useState("");
  const cities = useSelector((state) => state.cities);

  useEffect(() => {
    console.log(cities);
  }, [cities]);

  return (
    <Box pos="relative">
      <CarouselProvider
        naturalSlideWidth={160}
        totalSlides={cities.data.length + 1}
        visibleSlides={isMobile ? 1 : 4}
        isIntrinsicHeight
      >
        <Flex
          flexDir={["column", "row"]}
          justifyContent="space-between"
          alignItems={["flex-start", "flex-end"]}
          mb={["3", "2"]}
        >
          <Heading as="h2" size="md" mb={["2", "0"]} color="gray.700">
            Cidades
          </Heading>

          <Stack direction="row" spacing="1">
            <InputGroup size="sm">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                bg="gray.100"
                border="none"
                borderRadius="5px"
                width={["calc(100vw - 98px)", "250px"]}
                placeholder="Pesquisar"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
            <ButtonBack>
              <IconButton size="sm" icon={<ChevronLeftIcon />} />
            </ButtonBack>
            <ButtonNext>
              <IconButton size="sm" icon={<ChevronRightIcon />} />
            </ButtonNext>
          </Stack>
        </Flex>

        <Slider>
          {!cities.isLoading &&
            cities.data
              .filter(
                (city) =>
                  city.data.nome
                    .toUpperCase()
                    .includes(searchTerm.toUpperCase()) ||
                  city.data.microrregiao.mesorregiao.UF.nome
                    .toUpperCase()
                    .includes(searchTerm.toUpperCase())
              )
              .map((city, index) => (
                <Slide index={index} key={`city-carousel-${index}`}>
                  <City
                    index={index}
                    color={colors[index]}
                    city={city}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    onOpenNewCity={onOpenNewCity}
                  />
                </Slide>
              ))}
          <Slide>
            <Flex
              bg="gray.200"
              height="150px"
              borderRadius="13px"
              cursor="pointer"
              transition="0.3s"
              color="gray.400"
              alignItems="center"
              justifyContent="center"
              flexDir="column"
              _hover={{
                bg: "gray.300",
              }}
              onClick={onOpenNewCity}
            >
              <AddIcon />
              Adicionar cidade
            </Flex>
          </Slide>
        </Slider>
      </CarouselProvider>
    </Box>
  );
}
