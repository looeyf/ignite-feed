import styles from './style.module.css';

import igniteLogo from '../../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt='Ignite logo' className={styles.header__logo} />
    </header>
  );
}
