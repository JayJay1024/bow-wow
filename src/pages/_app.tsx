import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import { StyledEngineProvider, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(createTheme());

  useEffect(() => {
    const rootElement = document.getElementById("__next");
    setTheme(
      createTheme({
        components: {
          MuiPopover: {
            defaultProps: {
              container: rootElement,
            },
          },
          MuiPopper: {
            defaultProps: {
              container: rootElement,
            },
          },
        },
      })
    );
  }, []);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Head>
          <title>Bow Wow</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Bow wow" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
      <Analytics />
    </>
  );
}
