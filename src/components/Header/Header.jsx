import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <img src="/images/logo.jpg" className={styles.logo} />
      <h1>Our company</h1>
    </header>
  );
};
