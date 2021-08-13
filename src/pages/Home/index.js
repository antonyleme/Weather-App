import React, { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import NewCityModal from "~/components/NewCityModal";
import CitiesCarousel from "~/components/CitiesCarousel";
import CitiesCarouselSkeleton from "~/components/CitiesCarousel/Skeleton";
import CityData from "~/components/CityData";
import Layout from "~/layout";
import CityDataService from "~/services/city.service";

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeIndex, setActiveIndex] = useState(-1);
  //const cities = useSelector((state) => state.cities.data);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const toast = useToast();

  useEffect(() => {
    async function getData() {
      await CityDataService.getAll().on("value", (items) => {
        let citiesArr = [];
        items.forEach((item) => {
          let key = item.key;
          let data = item.val();

          citiesArr.push({ key, data });
        });
        setCities(citiesArr);
        setLoading(false);
      });
    }
    getData();
  }, []);

  //   useEffect(() => {
  //     if (cities.length) {
  //       if (loaded) {
  //         console.log(loaded);
  //         return toast({
  //           title: "Dados atualizados",
  //           description: "Atualização realizada nos dados com sucesso.",
  //           status: "success",
  //           duration: 4000,
  //           isClosable: true,
  //         });
  //       }

  //       setLoaded(true);
  //     }
  //   }, [cities]);

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

      {loading ? (
        <CitiesCarouselSkeleton />
      ) : (
        <CitiesCarousel
          onOpenNewCity={onOpen}
          cities={cities}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      )}
      {activeIndex !== -1 && (
        <CityData
          city={cities[activeIndex]}
          close={() => setActiveIndex(-1)}
          activeIndex={activeIndex}
        />
      )}
    </Layout>
  );
}
