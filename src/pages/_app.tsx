import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { StyledEngineProvider, ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const rootElement = document.getElementById("__next");
const theme = createTheme({
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
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
      <Analytics />
    </>
  );
}
