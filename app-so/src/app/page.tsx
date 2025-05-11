import Image from "next/image";
import styles from "./page.module.css";
import Header from "./componentes/header/page";
import Inicio from "./inicio/page";
import MulticsSection from "./multics/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <Inicio />
    </div>
  );
}
