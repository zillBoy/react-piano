// Internal Dependencies
import { Footer } from './components/Footer'
import { Logo } from './components/Logo/Logo';

import styles from './App.module.css'

export const App = () => {
  return <div>
    <Logo />
    <main className={styles.content} />
    <Footer />
  </div>
}