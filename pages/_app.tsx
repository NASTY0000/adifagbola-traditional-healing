import type { AppProps } from "next/app";
import { Playfair_Display } from "next/font/google";
import "../styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={playfair.className}>
      <Component {...pageProps} />
    </div>
  );
}
