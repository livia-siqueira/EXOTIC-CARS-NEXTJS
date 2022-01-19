import { GetStaticProps} from "next";
import { ParsedUrlQuery } from "querystring";
import {DetailsCar} from "@components/index";
import api from "../../services/api";
import { Car} from "@shared/index";
import data from '../../../data/cars.json';

interface Props {
  carSelected: Car;
}

const PageCar: React.FC<Props> = ({ carSelected }) => {
  return <DetailsCar carSelected={carSelected} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const cars: Car[] = data;
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
  const cars: Car[] = data;
  const idsCars = cars.map((car) => {
    return { params: { id: car.id.toString() } };
  });
  return {
    paths: idsCars,
    fallback: false,
  };
}

export default PageCar;
