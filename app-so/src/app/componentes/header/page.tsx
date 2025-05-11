import styles from "./page.module.css";
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Sistemas Operacionais</div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/multics" className={styles.link}>Multics</Link>
        <Link href="/unix" className={styles.link}>Unix</Link>
        <Link href="/bsd" className={styles.link}>BSD</Link>
        <Link href="/linux" className={styles.link}>Linux</Link>
        <Link href="/macos" className={styles.link}>MacOS</Link>
        <Link href="/windows" className={styles.link}>Windows</Link>
      </nav>
    </header>
  );
}