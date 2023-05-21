// styles
import styles from "@styles/Header.module.css";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}><Logo /></div>
      <div className={styles.searchBar}>search bar</div>
      <div className={styles.avatar}>avatar</div>
    </header>
  );
}
