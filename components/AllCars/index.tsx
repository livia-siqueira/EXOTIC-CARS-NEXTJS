import { CarItem } from "..";
import { Car, RootObject } from "../../shared/types";
import * as styles from "./styles";

interface Props {
  cars: Car[];
}

const AllCars: React.FC<Props> = ({ cars }) => {
  return (
    <styles.Container>
        <styles.List>
          {cars.map((car) => (
            <CarItem car={car} />
          ))}
        </styles.List>
    </styles.Container>
  );
};

export default AllCars;
