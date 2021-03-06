import Image from "next/image";
import { useCallback, useState } from "react";
import { Button, SliderCars } from "@components/index";
import { Car, AiOutlineArrowLeft, AiOutlineArrowRight } from "@shared/index";
import * as styles from "./styles";
import { useRouter } from "next/router";

interface Props {
  carSelected: Car;
}

const DetailsCar: React.FC<Props> = ({ carSelected }) => {
  const router = useRouter();
  const { brand, model, price, photos, logo_brand, period } = carSelected;
  const [carActive, setCarActive] = useState<number>(
    carSelected?.photos.length === 1 ? 0 : 1
  );
  const changeCarActiveColor = useCallback((index: number) => {
    setCarActive(index);
  }, []);
  const changePageCatalog = () => {
    return router.push("/car");
  };


  return (
    <styles.Container>
      <styles.Content>
        <styles.Title>
          <Image src={logo_brand} width={60} height={80} layout="fixed" alt="Logo Brand" />
          <styles.Name>
            {brand} {model}
            <styles.Price>
              ${price}/{period}
            </styles.Price>
          </styles.Name>
        </styles.Title>
        <styles.ContainerItems>
          <Button isCompleted={false} onClick={changePageCatalog}>
            {" "}
            <AiOutlineArrowLeft
              style={{ marginRight: "10px" }}
              size={25}
            />{" "}
            Back to catalog
          </Button>
          <styles.ImageBig
            src={photos[carActive].photo}
            width={783}
            height={400}
            layout="intrinsic"
            alt="Image in focus"
          />
          <styles.DetailsColors>
            <styles.Number>0{carActive + 1}</styles.Number>{" "}
            <styles.Color>{photos[carActive].color}</styles.Color>
          </styles.DetailsColors>
        </styles.ContainerItems>
        <styles.ContainerButton>
          <Button isCompleted={true}>
            Book Now
            <AiOutlineArrowRight size={25} style={{ marginLeft: "20px" }} />
          </Button>
        </styles.ContainerButton>
        <SliderCars
          ImagesCar={photos}
          indexActive={carActive}
          handleGoCar={changeCarActiveColor}
        />
      </styles.Content>
    </styles.Container>
  );
};

export default DetailsCar;
