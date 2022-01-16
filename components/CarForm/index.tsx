import { FormikErrors, useFormik } from "formik";
import React, { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Car, Photo } from "../../shared/types";
import * as styles from "./styles";

const CarForm: React.FC = () => {
  const [visibleInputImages, setVisibleInputImages] = useState<boolean>(false);
  const [qtdImages, setQtdImages] = useState<number>(0);
  const [optionsState, setOptionsState] = useState<string>("Day");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const inputModel = useRef<HTMLInputElement>(null);
  const inputPrice = useRef<HTMLInputElement>(null);
  const inputLogoBrand = useRef<HTMLInputElement>(null);
  const cover_photo = useRef<HTMLInputElement>(null);
  const inputBrand = useRef<HTMLInputElement>(null);

  const addNewCarHandler = async () => {
    if(inputModel !== null || !inputBrand || !inputLogoBrand || !inputPrice){
      return toast('erro')
    }
    /*const newCar = {
      model: car.model,
      price: car.price,
      brand: car.brand,
      period: optionsState,
      logo_brand: car.logo_brand,
      cover_photo: car.cover_photo,
      photos: photos
    }
    const data = await fetch("/api/cars", {
      method: "POST",
      body: JSON.stringify({ car: newCar}),
      headers: {
        "Content-Type": "application/json",
      },
    });*/
  };

  const arrayInputLength: number[] = Array.from({
    length: qtdImages,
  });

  const numberGame: number[] = arrayInputLength.map((_, index) => index + 1);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVisibleInputImages((prev) => {
      if (qtdImages === Number(event.target.value)) {
        return !prev;
      }
      return true;
    });
    setQtdImages(Number(event.target.value));
  };
  return (
    <styles.Container>
      <styles.Img
        src="/images/capaForm.jpg"
        alt="Carro vermelho"
        width={400}
        height={500}
      />
      <styles.Form onSubmit={addNewCarHandler}>
        <h2>Exotic Cars - New</h2>
        <styles.Input
          type="text"
          id="model"
          placeholder="Model"
          ref={inputModel}
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
        <styles.Controls>
          <styles.Control>
            {" "}
            <styles.Input
              type="radio"
              name="quantidade-images"
              value="1"
              onChange={changeHandler}
            />
            <styles.Label>1</styles.Label>
          </styles.Control>
          <styles.Control>
            <styles.Input
              type="radio"
              name="quantidade-images"
              value="2"
              onChange={changeHandler}
            />
            <styles.Label>2</styles.Label>
          </styles.Control>
          <styles.Control>
            <styles.Input
              type="radio"
              name="quantidade-images"
              value="3"
              onChange={changeHandler}
            />
            <styles.Label>3</styles.Label>
          </styles.Control>
        </styles.Controls>
        {visibleInputImages && (
          <styles.Images>
            {numberGame.map((item) => {
              const itemPlaceholder = "Image " + item.toString();
              return (
                <>
                  <styles.Input
                    onChange={(event) =>
                      setPhotos((prev) => [
                        { photo: event.target.value, color: "Red" },
                      ])
                    }
                    type="url"
                    placeholder={itemPlaceholder}
                  />
                </>
              );
            })}
          </styles.Images>
        )}
        <styles.Select
          name="Period"
          onChange={(event) => setOptionsState(event.target.value)}
        >
          <option selected value="Day">
            Day
          </option>
          <option value="Year">Year</option>
          <option value="Month">Month</option>
        </styles.Select>
        <button type="submit">
          Salvar Carro
        </button>
      </styles.Form>
    </styles.Container>
  );
};

export default CarForm;
