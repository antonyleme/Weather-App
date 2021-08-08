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

export default function Page() {
  const isMobile = useMediaQuery({ query: "(max-device-width: 768px)" });
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Box pos="relative">
      <CarouselProvider
        naturalSlideWidth={160}
        totalSlides={9}
        visibleSlides={isMobile ? 1 : 4}
        isIntrinsicHeight
      >
        <Flex
          flexDir={["column", "row"]}
          justifyContent="space-between"
          alignItems={["flex-start", "flex-end"]}
          mb="2"
        >
          <Heading as="h2" size="md" color="gray.700">
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
                width={["auto", "250px"]}
                placeholder="Pesquisar"
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
          {colors.map((color, index) => (
            <Slide index={index} key={index}>
              <City
                index={index}
                color={color}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </Box>
  );
}
