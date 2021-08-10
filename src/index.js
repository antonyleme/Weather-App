import React from "react";
import ReactDOM from "react-dom";
import Routes from "~/routes";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "~/store";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider>
        <Routes />
      </ChakraProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
