// Internal Dependencies
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo/Logo";

import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content}>
        <p>Helo</p>
      </main>
      <Footer />
    </div>
  );
};
