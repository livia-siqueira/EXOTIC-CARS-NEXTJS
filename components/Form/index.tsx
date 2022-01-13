import { useState } from "react";
import ButtonAuth from "../ButtonAuth";
import * as styles from "./styles";
import {FiLock, FiUser} from '../../shared/Icons/'
const Form = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const changeFunctionButton = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <>
      <styles.Container>
        <styles.HeaderForm>
          <styles.Title>{isLogin ? "Login" : "Register"}</styles.Title>
        </styles.HeaderForm>
        <styles.Background>
        </styles.Background>
        <styles.Form>
          <styles.Control>
            <FiUser style={{position: 'absolute', left: '0px', top: '8px',  color: 'gray'}} />
            <input type="email" id="email" placeholder="Email"/>
          </styles.Control>
          <styles.Control>
          <FiLock style={{position: 'absolute', left: '0px', top: '8px', color: 'gray'}} />
            <input type="password" id="password" placeholder="Password" />
          </styles.Control>
        </styles.Form>
        <styles.Actions>
          <ButtonAuth title={isLogin ? "Login" : "Create Account"} isBorder={true}/>
          <ButtonAuth onClick={changeFunctionButton} title={isLogin ? "Create Account" : "Login"} isBorder={false}/>
        </styles.Actions>
      
      </styles.Container>
     

     
    </>
  );
};

export default Form;
