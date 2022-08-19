import Head from "next/head";
import Fonts from "../Fonts";
import SharpGroteskBook20Woff from "../SharpGroteskBook20.woff";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={SharpGroteskBook20Woff}
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <Fonts />
      <div style={{ fontFamily: "Sharp-Grotesk" }}>Hello</div>
    </>
  );
}

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
