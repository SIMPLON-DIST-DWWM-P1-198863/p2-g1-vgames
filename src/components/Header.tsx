import logo from "../assets/Oie.png";
import avatar from "../assets/avatar.png";
import styles from "../styles/Header.module.css";
import { Link } from "react-router";

function Header() {
  return (
    <header>
      <a href="/">
        <img className={styles["header-logo"]} src={logo} alt="Logo du site" />
      </a>

      <h1>
        <Link to="/">The Honk Zone</Link>
      </h1>

      <div>
        <Link to="/mon-compte">
          <img src={avatar} alt="Avatar placeholder" />
        </Link>
        <Link to="/mon-compte" className={styles["header-connexion"]}>
          Connexion
        </Link>
      </div>

      <label className={styles["header-burger"]}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav className={styles["header-menu"]}>
        <Link to="/" className={styles["header-btn"]}>
          Page d'accueil
        </Link>
        <Link to="/catalogue_de_jeux" className={styles["header-btn"]}>
          Catalogue de jeux
        </Link>
        <Link to="/jeux-a-venir" className={styles["header-btn"]}>
          Sorties des jeux à venir
        </Link>
      </nav>
    </header>
  );
}

export default Header;
