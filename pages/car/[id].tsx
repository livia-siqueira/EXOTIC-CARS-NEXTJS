import { GetStaticPaths, GetStaticProps, NextPageContext } from "next";
import { ParsedUrlQuery } from "querystring";
import DetailsCar from "../../components/DetailsCar";
import api from "../../services/api";
import { Car, RootObject } from "../../shared/types";

interface Props {
  carSelected: Car;
}

const Car: React.FC<Props> = ({ carSelected }) => {
  return <DetailsCar carSelected={carSelected} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await api.get("/cars");
  const cars: Car[] = data.cars;
  const { id } = context.params as ParsedUrlQuery;
  const carSelected = cars.find((car) => {
    return car.id === id;
  });

  return {
    props: {
      carSelected: carSelected,
    },
  };
};

export async function getStaticPaths() {
  const { data } = await api.get("/cars");
  const cars: Car[] = data.cars;
  const idsCars = cars.map((car) => {
    return { params: { id: car.id.toString() } };
  });
  return {
    paths: idsCars,
    fallback: false,
  };
}

export default Car;
