import React from "react";
import { InputHTMLAttributes} from "react";
import * as styles from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
      <styles.Input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
  );
};

export default Input;