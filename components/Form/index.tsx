import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import ButtonAuth from "../ButtonAuth";
import * as styles from "./styles";
import { FiLock, FiUser } from "../../shared/Icons/";
import Input from "../Input";
import { User } from "../../shared/types";
import api from "../../services/api";
import toast from "react-hot-toast";
import { signIn, SignInResponse } from "next-auth/react";
import { useRouter } from "next/router";

const FormAuth: React.FC = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [inputValues, setInputValues] = useState<User>({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setInputValues((state) => {
      return { ...state, [name]: value };
    });
  };
  const changeFunctionButton = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLogin((prev) => !prev);
  };

  const loginUser = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = (await signIn("credentials", {
      email: inputValues.email,
      password: inputValues.password,
      redirect: false,
    })) as unknown as SignInResponse;

    if(result.status === 200){
      router.replace('/car');
    }
  };

  const createNewUser = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const newUser = {
      email: inputValues.email,
      password: inputValues.password,
    };

    try {
      const response = await api.post("/users", { user: newUser });
      if (response.status === 201) {
        return toast("User created with success");
      }
      if (response.status === 401) {
        return toast("User created with success");
      }
    } catch (error) {}
  };

  return (
    <>
      <styles.Container>
        <styles.Title>{isLogin ? "Login" : "Register"}</styles.Title>
        <styles.Form>
          <styles.Control>
            <FiUser
              style={{
                position: "absolute",
                left: "3px",
                top: "1.4rem",
                color: "gray",
              }}
            />
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              id="email"
              placeholder="Email"
            />
          </styles.Control>
          <styles.Control>
            <FiLock
              style={{
                position: "absolute",
                left: "3px",
                top: "1.4rem",
                color: "gray",
              }}
            />
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              id="password"
              placeholder="Password"
            />
          </styles.Control>
          <styles.Actions>
            <ButtonAuth
              page="Login"
              title={isLogin ? "Login" : "Create Account"}
              isBorder={true}
              onClick={isLogin ? loginUser : createNewUser}
            />
            <ButtonAuth
              page="Login"
              onClick={changeFunctionButton}
              title={isLogin ? "Create Account" : "Login"}
              isBorder={false}
            />
            <ButtonAuth
              page="Header"
              onClick={changeFunctionButton}
              title="Back"
              isBorder={true}
            />
          </styles.Actions>
        </styles.Form>
      </styles.Container>
    </>
  );
};

export default FormAuth;
