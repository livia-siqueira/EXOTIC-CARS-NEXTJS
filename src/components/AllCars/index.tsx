import { CarItem } from "..";
import { Car} from "../../shared/types";
import * as styles from "./styles";

interface Props {
  cars: Car[];
}

const AllCars: React.FC<Props> = ({ cars}) => {
  return (
    <styles.Container>
      <styles.List>
        {cars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </styles.List>
    </styles.Container>
  );
};
export default AllCars;
