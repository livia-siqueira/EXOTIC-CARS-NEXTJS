import useSWR from "swr";
import { AllCars } from "../../components";
import api from "../../services/api";
import { Car, RootObject } from "../../shared/types";

const PageCars = ({ cars }: RootObject) => {
  return <AllCars cars={cars} />;
};

export async function getStaticProps() {
  const data = await api.get("/cars");
  const cars : RootObject = data.data.cars;
  return {
    props: {
      cars: cars,
    },
  };
}

export default PageCars;
