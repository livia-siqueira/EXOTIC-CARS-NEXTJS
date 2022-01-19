import {Header} from "@components/index";

const Layout: React.FC = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
