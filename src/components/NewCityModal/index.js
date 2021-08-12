import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import states from "./states";
import { addCity } from "~/store/modules/cities/actions";
import { useDispatch } from "react-redux";
import Select from "react-select";
import CityDataService from "~/services/city.service";

export default function Component({ isOpen, onClose }) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  async function getCities(state) {
    try {
      const { data } = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`
      );

      for (const city of data) {
        city.value = city.id;
        city.label = city.nome;
      }
      setCities(data);
    } catch (e) {
      console.log(e);
    }
  }

  const add = async () => {
    const newCity = cities.find((c) => c.value == city);

    if (!newCity) {
      return toast({
        title: "Selecione uma cidade.",
        description: "Você se esqueceu de selecionar uma cidade..",
        status: "info",
        duration: 4000,
        isClosable: true,
      });
    }

    try {
      await CityDataService.create(newCity);

      toast({
        title: "Cidade adicionada.",
        description: "A cidade foi adicionada à lista com sucesso.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (e) {
      return toast({
        title: "Ops",
        description: "Por algum motivo não foi possível adicionar a cidade.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar cidade</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <FormControl mb="5">
            <FormLabel>Estado</FormLabel>
            <Select
              placeholder="Selecione"
              options={states}
              onChange={(e) => getCities(e.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Cidade</FormLabel>
            <Select
              placeholder="Selecione"
              options={cities}
              onChange={(e) => setCity(e.value)}
              disabled={!cities.length}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3}>
            Cancelar
          </Button>
          <Button colorScheme="green" onClick={add}>
            Adicionar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
