import React from "react";
import { Container, Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Container maxW={["100vw", "80%", "1600px"]} py="5" px={["0", "5"]}>
      <Box bg="gray.50" p={["2", "5", "10"]} borderRadius="10">
        {children}
      </Box>
    </Container>
  );
}
