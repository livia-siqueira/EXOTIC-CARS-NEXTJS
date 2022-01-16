import type { NextPage } from "next";
import { Toaster } from "react-hot-toast";
import Auth from "./auth";

const Home: NextPage = () => {
  return (
    <>
      <Auth />
    </>
  );
};

export default Home;
