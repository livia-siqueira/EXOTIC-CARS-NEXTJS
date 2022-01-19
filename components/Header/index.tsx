import Link from "next/link";
import ButtonAuth from "../ButtonAuth";
import * as styles from "./styles";
import { Location } from "..";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineSearch, FiMenu } from "../../shared/Icons";
import {useSession, signOut} from 'next-auth/react'


const MenuLateral: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [location, setLocation] = useState<boolean>(false);

  
  

  const changeState = useCallback(() => {
    menu ? setMenu(false) : setMenu(true);
  }, [menu]);

  const changeStateLocation = useCallback(() => {
    location ? setLocation(false) : setLocation(true);
  }, [location]);

  return (
    <styles.Container_Menu>
      <styles.ButtonMenu onClick={changeStateLocation}>
        <AiOutlineSearch size={24} />
      </styles.ButtonMenu>
      <styles.ButtonMenu onClick={changeState}>
        <FiMenu size={24} />
      </styles.ButtonMenu>
      {location && (
        <styles.AreaSearchClicked>
          <Location />
        </styles.AreaSearchClicked>
      )}
      <styles.Content_Menu>
        {menu && (
          <styles.Menu>
            <styles.Button>Sign Up</styles.Button>
            <styles.Button>Sign in</styles.Button>
          </styles.Menu>
        )}
      </styles.Content_Menu>
    </styles.Container_Menu>
  );
};



const Header: React.FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const {data: session, status} = useSession();
  console.log(session, status)

  const logout = () => {
    signOut();
  }

 

  useEffect(() => {
    if(session?.user){
      setIsLogged(true);
    }
  }, [isLogged, session])

  return (
    <styles.Header>
      <styles.LinkPageHome href="/">
        <styles.Title>exotic <styles.TitleDiferent>cars</styles.TitleDiferent></styles.Title>
      </styles.LinkPageHome>
      <styles.AreaSearch>
        <Location/>
      </styles.AreaSearch>
      <MenuLateral />
      <styles.Navigation>
        <Link href="/auth">
          <ButtonAuth page="Header" title="Sign Up" isBorder={false} />
        </Link>
        <Link href="/auth">
          <ButtonAuth page="Header" isBorder={true} title="Sign In" />
        </Link>
        {isLogged && <ButtonAuth page="Header" isBorder={true} title="Logout" onClick={logout}/>}
      </styles.Navigation>
    </styles.Header>
  );
};

export default Header;