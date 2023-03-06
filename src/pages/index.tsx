import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Bow Wow</title>
        <meta name="description" content="Bow wow home page" />
      </Head>
      <main>
        <Container>
          <Box>Home page</Box>
        </Container>
      </main>
    </>
  );
}
