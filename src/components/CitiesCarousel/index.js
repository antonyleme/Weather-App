import React, { useState, useEffect } from "react";
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

// import Bg1 from "~/assets/1.jpg";
// import Bg2 from "~/assets/2.jpg";
// import Bg3 from "~/assets/3.jpg";
// import Bg4 from "~/assets/4.jpg";
// import Bg5 from "~/assets/5.jpg";
// import Bg6 from "~/assets/6.jpg";
// import Bg7 from "~/assets/7.jpg";
// import Bg8 from "~/assets/8.jpg";
// import Bg9 from "~/assets/9.jpg";

// const bgs = [Bg1, Bg2, Bg3, Bg4, Bg5, Bg6, Bg7, Bg8, Bg9];

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

export default function Page({
  onOpenNewCity,
  cities,
  activeIndex,
  setActiveIndex,
}) {
  const isMobile = useMediaQuery({ query: "(max-device-width: 768px)" });
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box pos="relative">
      <CarouselProvider
        naturalSlideWidth={160}
        totalSlides={cities.length + 1}
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
          {!!cities.length &&
            cities
              .filter(
                (city) =>
                  city.name.toUpperCase().includes(searchTerm.toUpperCase()) ||
                  city.state.toUpperCase().includes(searchTerm.toUpperCase())
              )
              .map((city, index) => (
                <Slide index={index} key={index}>
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
