import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Monthly } from "@/components/Monthly";
import { monthlyData } from "@/data/monthly";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Bow Wow</title>
        <meta name="description" content="Bow wow home page" />
      </Head>
      <main className="min-h-screen">
        <Container>
          <Box pt={2}>
            <Monthly data={monthlyData} />
          </Box>
        </Container>
      </main>
    </>
  );
}
