import React, { useEffect, useState } from "react";
import { Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import NewCityModal from "~/components/NewCityModal";
import CitiesCarousel from "~/components/CitiesCarousel";
import CitiesCarouselSkeleton from "~/components/CitiesCarousel/Skeleton";
import CityData from "~/components/CityData";
import Layout from "~/layout";
import CityDataService from "~/services/city.service";
import { useDispatch, useSelector } from "react-redux";
import { getCities } from "~/store/modules/cities/actions";

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeIndex, setActiveIndex] = useState(-1);
  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    // async function getData() {
    //   await CityDataService.getAll().on("value", (items) => {
    //     let citiesArr = [];
    //     items.forEach((item) => {
    //       let key = item.key;
    //       let data = item.val();

    //       citiesArr.push({ key, data });
    //     });

    //     console.log(citiesArr);
    //     dispatch(setCities(citiesArr));
    //     setLoading(false);
    //   });
    // }
    // getData();
    dispatch(getCities());
  }, []);

  //   useEffect(() => {
  //     cities.map((city) => {
  //       if (city.data["today-temperatures"]) {
  //         dispatch(
  //           updateTemperatures([
  //             [
  //               city.data["today-temperatures"].data,
  //               city.data["today-temperatures"].temperatures,
  //             ],
  //           ])
  //         );
  //       }
  //     });
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

      {cities.isLoading ? (
        <CitiesCarouselSkeleton />
      ) : (
        <CitiesCarousel
          onOpenNewCity={onOpen}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      )}
      {activeIndex !== -1 && (
        <CityData
          city={cities.data[activeIndex]}
          close={() => setActiveIndex(-1)}
          activeIndex={activeIndex}
        />
      )}
    </Layout>
  );
}
