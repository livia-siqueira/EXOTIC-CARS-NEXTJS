import Header from "../Header";
import * as styles from "./styles";

const Layout: React.FC = ({ children }: any) => {
  return (
    <>
      <Header />
      <styles.Container>{children}</styles.Container>
    </>
  );
};

export default Layout;
