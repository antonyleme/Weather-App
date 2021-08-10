import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import states from "./states";
import { addCity } from "~/store/modules/cities/actions";
import { useDispatch } from "react-redux";

export default function Component({ isOpen, onClose }) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  async function getCities(state) {
    try {
      const { data } = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`
      );

      setCities(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(
          `https://apiprevmet3.inmet.gov.br/previsao/${city}`
        );

        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    if (city) getData();
  }, [city]);

  const add = () => {
    const newCity = cities.find((c) => c.id == city);
    dispatch(
      addCity({
        id: newCity.id,
        name: newCity.nome,
        state: newCity.microrregiao.mesorregiao.UF.nome,
      })
    );
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
            <Select defaultValue="" onChange={(e) => getCities(e.target.value)}>
              <option value="" disabled>
                Selecione
              </option>
              {states.map((state) => (
                <option value={state.sigla}>{state.nome}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Cidade</FormLabel>
            <Select
              defaultValue=""
              onChange={(e) => setCity(e.target.value)}
              disabled={!cities.length}
            >
              <option value="" disabled>
                Selecione
              </option>
              {cities.map((city) => (
                <option value={city.id}>{city.nome}</option>
              ))}
            </Select>
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
