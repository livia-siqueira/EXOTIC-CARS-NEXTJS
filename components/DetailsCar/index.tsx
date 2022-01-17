import Image from "next/image";
import { useCallback, useState } from "react";
import { Car } from "../../shared/types";
import { SliderCars } from "../SliderCar";
import * as styles from "./styles";

interface Props {
  carSelected: Car;
}

const DetailsCar: React.FC<Props> = ({ carSelected }) => {
  const { brand, model, price, cover_photo, photos, logo_brand, period } =
    carSelected;
  const [carActive, setCarActive] = useState<number>(
    carSelected?.photos.length === 1 ? 0 : 1
  );
  const changeCarActiveColor = useCallback((index: number) => {
    setCarActive(index);
  }, []);

  return (
    <styles.Container>
      <styles.Title>
        <Image src={logo_brand} width={60} height={80} layout="fixed" />
        <styles.Name>
          {brand} {model}
          <styles.Price>
            ${price}/{period}
          </styles.Price>
        </styles.Name>
      </styles.Title>
      <styles.ContainerItems>
        <button>Back to catalog</button>
        <styles.ImageBig
          src={carSelected?.photos[carActive].photo}
          width={700}
          height={300}
          layout="fixed"
        />
        <styles.DetailsColors>
          0{carSelected.id} {carSelected?.photos[carActive].color}
        </styles.DetailsColors>
      </styles.ContainerItems>
      <SliderCars
        ImagesCar={carSelected ? carSelected.photos : null}
        indexActive={carActive}
        handleGoCar={changeCarActiveColor}
      />
    </styles.Container>
  );
};

export default DetailsCar;
