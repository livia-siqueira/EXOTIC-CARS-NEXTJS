import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";
import { Url } from "url";
import { ButtonAuth } from "..";
import { Car, Photo } from "../../shared/types";
import InputImage from "../InputImage";
import * as styles from "./styles";

const CarForm: React.FC = () => {
  const [optionsState, setOptionsState] = useState<string>("Day");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [inputsValues, setInputsValues] = useState<Omit<Car, "id">>({
    model: "",
    period: "",
    logo_brand: "",
    price: "",
    photos: [
      {
        photo: "",
        color: "",
      },
    ],
    cover_photo: "",
    brand: "",
  });

  const addNewCarHandler = async (event: FormEvent) => {
    event.preventDefault();
    console.log(inputsValues);
    /*
    const data = await fetch("/api/cars", {
      method: "POST",
      body: JSON.stringify({ car: newCar}),
      headers: {
        "Content-Type": "application/json",
      },
    });*/
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    console.log(name);

    const isImage = name.match(/photo/g);
    const isColor = name.match(/color/g);

    if(isImage && isColor){
      setPhotos((state) => [...state, {photo: value, color: value}])
    }

    setInputsValues((state) => {
      return { ...state, [name]: value, period: optionsState };
    });
  };

  return (
    <styles.Container>
      <styles.ContainerImage>
        <styles.Img
          src="/images/capaForm.jpg"
          alt="Carro vermelho"
          width={180}
          height={180}
          layout="intrinsic"
        />
        <styles.Title>Exotic Cars - New</styles.Title>
      </styles.ContainerImage>
      <styles.Form onSubmit={addNewCarHandler}>
        <styles.AreaInput>
          <styles.Input
            type="text"
            id="model"
            name="model"
            placeholder="Model"
            onChange={handleInputChange}
          />
          <styles.Input
            type="text"
            id="model"
            name="cover_photo"
            placeholder="Cover photo"
            onChange={handleInputChange}
          />
          <styles.Input
            type="text"
            id="brand"
            name="brand"
            placeholder="Brand"
            onChange={handleInputChange}
          />
          <styles.Input
            type="text"
            id="price"
            name="price"
            placeholder="Price"
            onChange={handleInputChange}
          />
          <styles.Input
            type="url"
            id="logo_brand"
            name="logo_brand"
            placeholder="Logo Brand"
            onChange={handleInputChange}
          />
        </styles.AreaInput>
        <styles.AreaControl>
          <h6>Imagens: </h6>
          <InputImage
            placeholder="Image 1"
            name="photo"
            onChange={handleInputChange}
          />
          <InputImage
            placeholder="Image 2"
            name="photo"
            onChange={handleInputChange}
          />
          <InputImage
            placeholder="Image 3"
            name="photo"
            onChange={handleInputChange}
          />
          <h6>Period: </h6>
          <styles.Select
            defaultValue="Day"
            onChange={(event) => setOptionsState(event.target.value)}
          >
            <option value="Day">Day</option>
            <option value="Year">Year</option>
            <option value="Month">Month</option>
          </styles.Select>
          <styles.Button>
            <ButtonAuth
              isBorder={true}
              title="Save Car"
              page="Auth"
              type="submit"
            />
          </styles.Button>
        </styles.AreaControl>
      </styles.Form>
    </styles.Container>
  );
};

export default CarForm;
