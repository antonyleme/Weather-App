import React from "react";
import ReactDOM from "react-dom";
import Routes from "~/routes";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import "pure-react-carousel/dist/react-carousel.es.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
