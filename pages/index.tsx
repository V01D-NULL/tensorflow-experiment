import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SocialMediaModal from "../components/social-media";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SocialMediaModal />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <Image src="/ur-mom.jpg" alt="" width={120} height={80} />
          </span>
        </a>
      </footer>
    </div>
  );
}
