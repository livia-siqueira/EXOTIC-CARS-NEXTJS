import Link from "next/link";
import ButtonAuth from "../ButtonAuth";
import * as styles from "./styles";

const Header: React.FC = () => {
  return (
    <styles.Header>
      <div>
        <styles.Title>exotic <styles.TitleDiferent>cars</styles.TitleDiferent></styles.Title>
      </div>
      <div></div>
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
