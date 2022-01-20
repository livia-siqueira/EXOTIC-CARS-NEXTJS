import { Car } from "@shared/index";
import * as styles from "./styles";
import { useRouter } from "next/router";
import Image from "next/image";

const CarItem: React.FC<{ car: Car }> = ({ car }) => {
  const router = useRouter();
  const redirectPage = () => {
    router.push(`/car/${car.id}`);
  };
  return (
    <styles.Container>
      <styles.Button onClick={redirectPage}>
        <styles.HeaderItem>
          <styles.ContainerNames>
            <styles.Brand>{car.brand}</styles.Brand>
            <styles.Model>{car.model}</styles.Model>
          </styles.ContainerNames>
          <styles.Icon></styles.Icon>
        </styles.HeaderItem>
        <styles.Image>
        <Image
          src={car.cover_photo}
          width={300}
          height={100}
          layout="intrinsic"
          alt="Image car"
        />
        </styles.Image>
        <styles.ContainerPricePeriod>
          <styles.Price>
            <styles.IconMoney />
            {car.price}
          </styles.Price>
          <styles.Period>/{car.period}</styles.Period>
        </styles.ContainerPricePeriod>
      </styles.Button>
    </styles.Container>
  );
};

export default CarItem;
