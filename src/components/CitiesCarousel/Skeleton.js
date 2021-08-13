import React from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Stack,
  Input,
  InputGroup,
  Grid,
  Skeleton,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";

export default function Component() {
  return (
    <Box pos="relative">
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
            />
          </InputGroup>
          <IconButton size="sm" icon={<ChevronLeftIcon />} />
          <IconButton size="sm" icon={<ChevronRightIcon />} />
        </Stack>
      </Flex>

      <Grid gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]} gap="1">
        <Skeleton h="150px" borderRadius="13px" />
        <Skeleton h="150px" borderRadius="13px" />
        <Skeleton h="150px" borderRadius="13px" />
        <Skeleton h="150px" borderRadius="13px" />
      </Grid>
    </Box>
  );
}
