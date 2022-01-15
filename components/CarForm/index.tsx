import React, {
  ChangeEventHandler,
  EventHandler,
  MouseEventHandler,
  useState,
} from "react";
import * as styles from "./styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";

const CarForm: React.FC = () => {
  const [visibleInputImages, setVisibleInputImages] = useState<boolean>(false);
  const [qtdImages, setQtdImages] = useState<number>(0);

  const arrayInputLength: number[] = Array.from({
    length: qtdImages,
  });

  const numberGame: number[] = arrayInputLength.map((_, index) => index + 1);

  const addNewCarHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = await fetch("/api/cars", {
      method: "POST",
      body: JSON.stringify({ email: "livia", password: "livia123" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

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
        <styles.Input type="text" id="model" placeholder="Model" />
        <styles.Input type="text" id="brand" placeholder="Brand" />
        <styles.Input type="text" id="price" placeholder="Price" />
        <styles.Input type="url" id="logoBrand" placeholder="Logo Brand" />
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
                <styles.Input type="url" placeholder={itemPlaceholder} />
              </>
            )})}
          </styles.Images>
        )}
        <styles.Select>
          <option>Day</option>
          <option>Year</option>
          <option>Month</option>
        </styles.Select>
        <button>Salvar Carro</button>
      </styles.Form>
    </styles.Container>
  );
};

export default CarForm;
