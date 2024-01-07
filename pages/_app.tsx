import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextTopLoader color="#7fd1eb" height={2} showSpinner={false} />
      <Component {...pageProps} />
    </>
  );
}
