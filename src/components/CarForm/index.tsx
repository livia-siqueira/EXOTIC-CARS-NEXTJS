import React, { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { Car } from "@shared/index";
import {Input, InputImage, ButtonAuth} from "@components/index";
import * as styles from "./styles";
import { useRouter } from "next/router";

interface PropsInputsImages {
  photo1: string;
  color1: string;
  photo2: string;
  color2: string;
  photo3: string;
  color3: string;
}

const CarForm: React.FC = () => {
  const initialValuesForm = {
    model: "",
    period: "",
    logo_brand: "",
    price: "",
    cover_photo: "",
    brand: "",
  }
  const initialValuesImage = {
    photo1: "",
    color1: "",
    photo2: "",
    color2: "",
    photo3: "",
    color3: "",
  }
  const [optionsState, setOptionsState] = useState<string>("Day");
  const [inputsImages, setInputImages] = useState<PropsInputsImages>(initialValuesImage)
  const router = useRouter();
  const [inputsValues, setInputsValues] = useState<Omit<Car, "id" | "photos">>(initialValuesForm)

  const Back = () =>{
    router.push('/');
  }

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
      !inputsValues.logo_brand.trim() ||
      !inputsValues.model.trim() ||
      !inputsValues.period.trim() ||
      !inputsValues.cover_photo.trim() ||
      !inputsValues.brand.trim() ||
      !inputsValues.price.trim()
    ) {
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
        setInputsValues(initialValuesForm)
        setInputImages(initialValuesImage)
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
          width={180}
          height={180}
          layout="intrinsic"
          alt="Image apresentation logic web"
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
            value={inputsValues.model}
            onChange={handleInputChange}
          />
          <Input
            type="url"
            id="cover_photo"
            name="cover_photo"
            value={inputsValues.cover_photo}
            placeholder="Cover photo"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            id="brand"
            name="brand"
            value={inputsValues.brand}
            placeholder="Brand"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            id="price"
            name="price"
            value={inputsValues.price}
            placeholder="Price"
            onChange={handleInputChange}
          />
          <Input
            type="url"
            id="logo_brand"
            name="logo_brand"
            value={inputsValues.logo_brand}
            placeholder="Logo Brand"
            onChange={handleInputChange}
          />
        </styles.AreaInput>
        <styles.AreaControl>
          <styles.Label>Imagens: </styles.Label>
          <InputImage
            placeholder="Image 1"
            value={inputsImages.photo1}
            name="photo1"
            onChange={handleInputChange}
          />
          <InputImage
            placeholder="Image 2"
            value={inputsImages.photo2}
            name="photo2"
            onChange={handleInputChange}
          />
          <InputImage
            placeholder="Image 3"
            value={inputsImages.photo3}
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
              <ButtonAuth
              isBorder={true}
              title="Back"
              page="Auth"
              type="button"
              onClick={Back}
            />
          </styles.Button>
        </styles.AreaControl>
      </styles.Form>
    </styles.Container>
  );
};

export default CarForm;
