import Head from "next/head";
import ConsultantBio from "../components/ConsultantBio";

export default function About() {
  return (
    <>
      <Head>
        <title>About — Adifagbola Traditional Healing</title>
        <meta name="description" content="About Oluwo Dr. Faniyi Adebanjo Adifagbola — Sixth-Generation Ifá Practitioner" />
      </Head>

      <main>
        <ConsultantBio />
      </main>
    </>
  );
}
