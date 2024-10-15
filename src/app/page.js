import styles from './page.module.css'
import Calculator from '@/components/calculator/Calculator'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>The Open-Source Calculator</h1>
      <Calculator />
    </main>
  )
}
