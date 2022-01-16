import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <Toaster position="top-left" toastOptions={{duration:3000}}/>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
