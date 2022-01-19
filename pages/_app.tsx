import "../styles/globals.ts";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { Toaster } from "react-hot-toast";
import Global from "../styles/globals";
import {SessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <ThemeProvider theme={theme}>
      <Global/>
      <Layout>
        <Component {...pageProps} />
        <Toaster position="top-center" toastOptions={{duration:3000}}/>
      </Layout>
    </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
