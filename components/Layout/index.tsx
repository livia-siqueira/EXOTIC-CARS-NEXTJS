import Header from "../Header";
import * as styles from "./styles";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <styles.Container>{children}</styles.Container>
    </>
  );
};

export default Layout;
