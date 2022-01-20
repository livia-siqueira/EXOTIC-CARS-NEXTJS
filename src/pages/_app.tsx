import type { AppProps } from "next/app";
import {Header, Layout} from "@components/index";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";
import {Global,theme} from "@shared/index";
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
    <ThemeProvider theme={theme}>
      <Global/>
      <Header/>
        <Component {...pageProps} />
        <Toaster position="top-center" toastOptions={{duration:3000}}/>
    </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
