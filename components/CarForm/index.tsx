import React, { FormEvent, useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";
import { ButtonAuth } from "..";
import { Photo } from "../../shared/types";
import InputImage from "../InputImage";
import * as styles from "./styles";

const CarForm: React.FC = () => {
  const [optionsState, setOptionsState] = useState<string>("Day");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const inputModel = useRef<HTMLInputElement>(null);
  const inputPrice = useRef<HTMLInputElement>(null);
  const inputLogoBrand = useRef<HTMLInputElement>(null);
  const inputCover_photo = useRef<HTMLInputElement>(null);
  const inputBrand = useRef<HTMLInputElement>(null);
  const inputImage1 = useRef<HTMLInputElement>(null);
  const inputImage2 = useRef<HTMLInputElement>(null);
  const inputImage3 = useRef<HTMLInputElement>(null);

  const addNewCarHandler = async (event: FormEvent) => {
    event.preventDefault();
    const enteredModel = inputModel.current?.value;
    const enteredPrice = inputPrice.current?.value;
    const enteredLogoBrand = inputLogoBrand.current?.value;
    const enteredBrand = inputBrand.current?.value;
    const enteredCoverPhoto = inputCover_photo.current?.value;
    if (
      !enteredModel ||
      !enteredPrice ||
      !enteredLogoBrand ||
      !enteredBrand ||
      !enteredCoverPhoto
    ) {
      return toast("Please, enter all information 😉");
    }
    const newCar = {
      model: enteredModel,
      price: enteredPrice,
      brand: enteredBrand,
      period: optionsState,
      logo_brand: enteredLogoBrand,
      cover_photo: enteredCoverPhoto,
      photos: photos,
    };

    setPhotos([]);

    console.log(
      inputImage3.current?.value,
      inputImage2.current?.value,
      inputImage1.current?.value
    );
    /*
    const data = await fetch("/api/cars", {
      method: "POST",
      body: JSON.stringify({ car: newCar}),
      headers: {
        "Content-Type": "application/json",
      },
    });*/
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
            placeholder="Model"
            ref={inputModel}
          />
          <styles.Input
            type="text"
            id="model"
            placeholder="Cover photo"
            ref={inputCover_photo}
          />
          <styles.Input
            type="text"
            id="brand"
            placeholder="Brand"
            ref={inputBrand}
          />
          <styles.Input
            type="text"
            id="price"
            placeholder="Price"
            ref={inputPrice}
          />
          <styles.Input
            type="url"
            id="logo_brand"
            placeholder="Logo Brand"
            ref={inputLogoBrand}
          />
        </styles.AreaInput>
        <styles.AreaControl>
          <h6>Imagens: </h6>
          <InputImage placeholder="Image 1" />
          <InputImage placeholder="Image 2" />
          <InputImage placeholder="Image 3" />
          <h6>Period: </h6>
          <styles.Select
            defaultValue="Day"
            onChange={(event) => setOptionsState(event.target.value)}
          >
            <option selected value="Day">
              Day
            </option>
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
