import {Header} from "@components/index";
import Head from "next/head";
import * as styles from './styles'

const Layout: React.FC = ({ children }: any) => {
  return (
    <>
      <Header />
      <Head>
        <title>Exotic - Cars</title>
      </Head>
      <styles.Main>{children}</styles.Main>
    </>
  );
};

export default Layout;
