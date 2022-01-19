import React, { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { ButtonAuth } from "..";
import api from "../../services/api";
import { Car } from "../../shared/types";
import Input from "../Input";
import InputImage from "../InputImage";
import * as styles from "./styles";

interface PropsInputsImages {
  photo1: string;
  color1: string;
  photo2: string;
  color2: string;
  photo3: string;
  color3: string;
}

const CarForm: React.FC = () => {
  const [optionsState, setOptionsState] = useState<string>("Day");
  const [inputsImages, setInputImages] = useState<PropsInputsImages>({
    photo1: "",
    color1: "",
    photo2: "",
    color2: "",
    photo3: "",
    color3: "",
  });

  const [inputsValues, setInputsValues] = useState<Omit<Car, "id" | "photos">>({
    model: "",
    period: "",
    logo_brand: "",
    price: "",
    cover_photo: "",
    brand: "",
  });

  const addNewCarHandler = async (event: FormEvent) => {
    event.preventDefault();
    const photosCar = [
      {
        photo: inputsImages.photo1,
        color: inputsImages.color1,
      },
      {
        photo: inputsImages.photo2,
        color: inputsImages.color2,
      },
      {
        photo: inputsImages.photo3,
        color: inputsImages.color3,
      },
    ];

    const newPhotos = photosCar.filter((photo) => {
      return photo.color.trim().length > 0 && photo.photo.trim().length > 0;
    });

    if (
      !inputsValues.logo_brand ||
      !inputsValues.model ||
      !inputsValues.period ||
      !inputsValues.cover_photo ||
      !inputsValues.brand ||
      !inputsValues.price
    ) {
      console.log(inputsValues);
      return toast("Please, enter all information 😉");
    }
    if (
      !(inputsImages.photo1 && inputsImages.color1) &&
      !(inputsImages.photo2 && inputsImages.color2) &&
      !(inputsImages.photo3 && inputsImages.color3)
    ) {
      return toast(
        "Please, insert a complete image whit url and color at least 😉"
      );
    }
    const newCar = {
      model: inputsValues.model,
      brand: inputsValues.brand,
      cover_photo: inputsValues.cover_photo,
      price: inputsValues.price,
      photos: newPhotos,
      period: optionsState,
      logo_brand: inputsValues.logo_brand,
    };

    try {
      const response = await api.post("/cars", { car: newCar });
      if (response.status === 201) {
        return toast("Car created with success");
      }
    } catch (err) {
      return toast("Ops, ocurred someone problem");
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    if (name !== "cover_photo" && name.match(/photo\d{1}|color/)) {
      setInputImages((state) => {
        return { ...state, [name]: value };
      });
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
          <Input
            type="text"
            id="model"
            name="model"
            placeholder="Model"
            onChange={handleInputChange}
          />
          <Input
            type="url"
            id="cover_photo"
            name="cover_photo"
            placeholder="Cover photo"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            id="brand"
            name="brand"
            placeholder="Brand"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            id="price"
            name="price"
            placeholder="Price"
            onChange={handleInputChange}
          />
          <Input
            type="url"
            id="logo_brand"
            name="logo_brand"
            placeholder="Logo Brand"
            onChange={handleInputChange}
          />
        </styles.AreaInput>
        <styles.AreaControl>
          <styles.Label>Imagens: </styles.Label>
          <InputImage
            placeholder="Image 1"
            name="photo1"
            onChange={handleInputChange}
          />
          <InputImage
            placeholder="Image 2"
            name="photo2"
            onChange={handleInputChange}
          />
          <InputImage
            placeholder="Image 3"
            name="photo3"
            onChange={handleInputChange}
          />
          <styles.Label>Period: </styles.Label>
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
