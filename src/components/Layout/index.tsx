import {Header} from "@components/index";
import Head from "next/head";

const Layout: React.FC = ({ children }: any) => {
  return (
    <>
      <Header />
      <Head>
        <title>Exotic - Cars</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
