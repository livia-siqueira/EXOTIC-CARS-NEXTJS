import { FormEvent, useState } from "react";
import ButtonAuth from "../ButtonAuth";
import * as styles from "./styles";
import { FiLock, FiUser } from "../../shared/Icons/";
import { FormikConfig, FormikValues, useFormik } from "formik";
interface Props {
  email: string;
  password: string;
}
const initialValues: Props = { email: "", password: "" };

const validateFormLogin = (values : Props) => {
  const erros: Props = initialValues;

  if (!values.email) {
    erros.email = "Please, entry with email";
  } else if (!values.email.includes("@")) {
    erros.email = "Please, entry with email correct";
  }

  if (!values.password) {
    erros.password = "Please, entry with password";
  } else if (values.password.length < 8) {
    erros.password = "Please, your password must have more than eigth numbers";
  }

  return erros;
};

const FormAuth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const changeFunctionButton = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLogin((prev) => !prev);
  };
  
  

  return (
    <>
      <styles.Container>
        <styles.HeaderForm>
          <styles.Title>{isLogin ? "Login" : "Register"}</styles.Title>
        </styles.HeaderForm>
        <styles.Background></styles.Background>
        <styles.Form>
          <styles.Control>
            <FiUser
              style={{
                position: "absolute",
                left: "0px",
                top: "8px",
                color: "gray",
              }}
            />
            <input type="email" id="email" placeholder="Email" />
          </styles.Control>
          <styles.Control>
            <FiLock
              style={{
                position: "absolute",
                left: "0px",
                top: "8px",
                color: "gray",
              }}
            />
            <input type="password" id="password" placeholder="Password" />
          </styles.Control>
          <styles.Actions>
            <ButtonAuth
              title={isLogin ? "Login" : "Create Account"}
              isBorder={true}
            />
            <ButtonAuth
              onClick={changeFunctionButton}
              title={isLogin ? "Create Account" : "Login"}
              isBorder={false}
            />
          </styles.Actions>
        </styles.Form>
      </styles.Container>
    </>
  );
};

export default FormAuth;
