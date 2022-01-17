import Link from "next/link";
import ButtonAuth from "../ButtonAuth";
import * as styles from "./styles";
import { Location } from "..";

const Header: React.FC = () => {
  return (
    <styles.Header>
      <styles.LinkPageHome href="/">
        <styles.Title>exotic <styles.TitleDiferent>cars</styles.TitleDiferent></styles.Title>
      </styles.LinkPageHome>
      <div>
        <Location/>
      </div>
      <nav>
        <Link href="/auth">
          <ButtonAuth page="Header" title="Sign Up" isBorder={false} />
        </Link>
        <Link href="/auth">
          <ButtonAuth page="Header" isBorder={true} title="Sign In" />
        </Link>
      </nav>
    </styles.Header>
  );
};

export default Header;
