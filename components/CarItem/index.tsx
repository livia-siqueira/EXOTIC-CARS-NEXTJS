import { Car } from "../../shared/types";
import * as styles from "./styles";
import { useRouter } from "next/router";

const CarItem: React.FC<{ car: Car }> = ({ car }) => {
  const router = useRouter();
  const redirectPage = () => {
    router.push(`/car/${car.id}`);
  };
  return (
    <styles.Container>
      <styles.Button onClick={redirectPage}>
        <styles.ContainerNames>
          <styles.Brand>{car.brand}</styles.Brand>
          <styles.Model>{car.model}</styles.Model>
        </styles.ContainerNames>
        <img src={car.cover_photo} />
        <styles.ContainerPricePeriod>
          <styles.Price>${car.price}</styles.Price>
          <styles.Period>/{car.period}</styles.Period>
        </styles.ContainerPricePeriod>
      </styles.Button>
    </styles.Container>
  );
};

export default CarItem;