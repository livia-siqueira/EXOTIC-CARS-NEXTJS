import React, { FormEvent, useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";
import { ButtonAuth } from "..";
import { Photo } from "../../shared/types";
import * as styles from "./styles";

const CarForm: React.FC = () => {
  const [visibleInputImages, setVisibleInputImages] = useState<boolean>(false);
  const [qtdImages, setQtdImages] = useState<number>(3);
  const [optionsState, setOptionsState] = useState<string>("Day");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const inputModel = useRef<HTMLInputElement>(null);
  const inputPrice = useRef<HTMLInputElement>(null);
  const [inputColor, setInputColor] = useState<string>('');
  const inputLogoBrand = useRef<HTMLInputElement>(null);
  const inputCover_photo = useRef<HTMLInputElement>(null);
  const inputBrand = useRef<HTMLInputElement>(null);
  const [inputRefImage, setInputRefImage] = useState<string>('');
  const addImage = useCallback(() => {
    const enteredLinkImage = inputRefImage;
    const enteredColorCar = inputColor;
    if (!enteredLinkImage || !enteredColorCar) {
      return toast("Please, enter all information 😉");
    }
    if(photos.length >= 3){
      return toast("You have already added enough images")
    }
    setPhotos((prev) => {
      return [...prev, { photo: enteredLinkImage, color: enteredColorCar }];
    });
    console.log(photos);
  }, [inputRefImage, inputColor, photos, qtdImages]);

  const addNewCarHandler = async (event: FormEvent) => {
    event.preventDefault();
    const enteredModel = inputModel.current?.value;
    const enteredPrice = inputPrice.current?.value;
    const enteredLogoBrand = inputLogoBrand.current?.value;
    const enteredBrand = inputBrand.current?.value;
    const enteredCoverPhoto = inputCover_photo.current?.value;
    if (!enteredModel || !enteredPrice || !enteredLogoBrand || !enteredBrand || !enteredCoverPhoto) {
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

    console.log(newCar);
    /*
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
        <styles.Title>Exotic Cars - New</styles.Title>
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
        <styles.Controls>
          <h6>Number of cars: </h6>
          <styles.Control>
            {" "}
            <styles.ChoiceImage
              type="radio"
              name="quantidade-images"
              value="1"
              onChange={changeHandler}
            />
            <styles.Label>1</styles.Label>
          </styles.Control>
          <styles.Control>
            <styles.ChoiceImage
              type="radio"
              name="quantidade-images"
              value="2"
              onChange={changeHandler}
            />
            <styles.Label>2</styles.Label>
          </styles.Control>
          <styles.Control>
            <styles.ChoiceImage
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
                  <styles.ImageColor>
                    {" "}
                    <styles.Input
                      value={inputRefImage}
                      onChange={(event) => setInputRefImage(event.target.value)}
                      type="url"
                      placeholder={itemPlaceholder}
                    />
                    <styles.Input
                      type="text"
                      value={inputColor}
                      onChange={(event) => setInputColor(event.target.value)}
                      placeholder="Color"
                    />
                    <styles.Button type="button" onClick={addImage}>
                      <styles.Icon />
                    </styles.Button>
                  </styles.ImageColor>
                </>
              );
            })}
          </styles.Images>
        )}
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
        <ButtonAuth isBorder={true} title="Save Car" page="" type="submit" />
      </styles.Form>
    </styles.Container>
  );
};

export default CarForm;
