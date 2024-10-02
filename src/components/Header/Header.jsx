import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <img src="/images/logo.jpg" className={styles.logo} />
      <h1>Future Collars eShop</h1>
    </header>
  );
};
