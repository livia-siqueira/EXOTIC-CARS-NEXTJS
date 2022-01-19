import Link from "next/link";
import * as styles from "./styles";
import { Location, ButtonAuth } from "@components/index";
import { useCallback, useState } from "react";
import { AiOutlineSearch, FiMenu } from "@shared/index";
import { useSession, signOut } from "next-auth/client";
import { useRouter } from "next/router";

const MenuLateral: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [location, setLocation] = useState<boolean>(false);
  const [session, loading] = useSession();

  const logout = () => {
    signOut();
  };

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
            {session ? (
             <styles.Button onClick={logout}>Logout</styles.Button>
            ) : (
              <>
                <styles.Button>Sign Up</styles.Button>
                <styles.Button>Sign in</styles.Button>
              </>
            )}
          </styles.Menu>
        )}
      </styles.Content_Menu>
    </styles.Container_Menu>
  );
};

const Header: React.FC = () => {
  const [session, loading] = useSession();

  const logout = () => {
    signOut();
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <styles.Header>
      <styles.LinkPageHome href="/">
        <styles.Title>
          exotic <styles.TitleDiferent>cars</styles.TitleDiferent>
        </styles.Title>
      </styles.LinkPageHome>
      <styles.AreaSearch>
        <Location />
      </styles.AreaSearch>
      <MenuLateral />
      <styles.Navigation>
        {!session ? (
          <>
            <Link href="/auth" passHref={true}>
              <ButtonAuth page="Header" title="Sign Up" isBorder={false} />
            </Link>
            <Link href="/auth" passHref={true}>
              <ButtonAuth page="Header" isBorder={true} title="Sign In" />
            </Link>
          </>
        ) : (
          <ButtonAuth
            page="Header"
            isBorder={true}
            title="Logout"
            onClick={logout}
          />
        )}
      </styles.Navigation>
    </styles.Header>
  );
};

export default Header;
