import styles from './Header.module.css';
import logo from './logo.svg';
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.navigation}>
      <Link className={styles.appLogo} to="/">
        <img src={logo} className={styles.imgLogo} alt="logo" />
      </Link>
      <Link className={styles.navLink} to="/invoices">Invoices</Link>
      <Link className={styles.navLink} to="/expenses">Expenses</Link>
    </header>
  );
}
export default Header;