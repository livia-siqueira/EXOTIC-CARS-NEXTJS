import React from "react";
import { InputHTMLAttributes} from "react";
import {Input} from "@components/index";
import * as styles from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const InputImage: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const numberImage = props.name?.match(/\d/);
  let nameInputColor;
  if (numberImage) {
    nameInputColor = "color" + numberImage[0];
  }

  return (
    <styles.ImageColor>
      {" "}
      <Input
        type="url"
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      <Input
        type="text"
        placeholder="Color"
        name={nameInputColor}
        onChange={props.onChange}
      />
    </styles.ImageColor>
  );
};

export default InputImage;
