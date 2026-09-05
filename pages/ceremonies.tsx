import Head from "next/head";
import Ceremonies from "../components/Ceremonies";

export default function CeremoniesPage() {
  return (
    <>
      <Head>
        <title>Living Tradition & Ceremonies | Adifagbola Traditional Healing</title>
        <meta
          name="description"
          content="Authentic glimpses into sacred practices, cultural celebrations, and community healing sessions."
        />
      </Head>
      <main>
        <Ceremonies />
      </main>
    </>
  );
}
