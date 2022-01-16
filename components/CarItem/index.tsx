import Image from "next/image";
import { Car } from "../../shared/types";
import * as styles from './styles';


const CarItem : React.FC<{car: Car}> = ({car}) => {
    return (
        <styles.Container>
            <styles.Button>
            <styles.ContainerNames>
            <styles.Brand>{car.brand}</styles.Brand>
            <styles.Model>{car.model}</styles.Model>
            </styles.ContainerNames>
            <img src={car.cover_photo}/>
            <styles.ContainerPricePeriod>
                <styles.Price>${car.price}</styles.Price><styles.Period>/{car.period}</styles.Period>
            </styles.ContainerPricePeriod>
            </styles.Button>
        </styles.Container>
    )
}


export default CarItem;