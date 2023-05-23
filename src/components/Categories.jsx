//styles
import styles from '@styles/Categories.module.css'

export default function Categories() {
  return (
    <ul className={styles.container}>
      <li className={`${styles.item} ${styles.selected}`}>Java</li>
      <li className={styles.item}>Python</li>
      <li className={styles.item}>JavaScrpt</li>
      <li className={styles.item}>GitHub</li>
      <li className={styles.item}>Go</li>
    </ul>
  )
}
