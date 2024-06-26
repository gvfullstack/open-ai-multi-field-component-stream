import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ParentNeighborhoodSection from "@/Components/NeighborhoodsDisplay/ParentNeighborhoodsDisplay";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Multi Component Stream using OpenAI API</title>
        <meta name="description" content="Sample project of how to load a stream to a multi-field component." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
        <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <ParentNeighborhoodSection/>
      </main>
    </>
  );
}
