import logo from "../assets/Oie.png";
import avatar from "../assets/avatar.png";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header>
      <a href="/">
        <img className={styles["header-logo"]} src={logo} alt="Logo du site" />
      </a>

      <h1>
        <a href="/">The Honk Zone</a>
      </h1>

      <div>
        <a href="/">
          <img src={avatar} alt="Avatar placeholder" />
        </a>
        <a className={styles["header-connexion"]} href="#">
          Connexion
        </a>
      </div>

      <label className={styles["header-burger"]}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav className={styles["header-menu"]}>
        <a className={styles["header-btn"]} href="#">
          Page d'accueil
        </a>
        <a className={styles["header-btn"]} href="#">
          Catalogue de jeux
        </a>
        <a className={styles["header-btn"]} href="#">
          Sorties des jeux à venir
        </a>
      </nav>
    </header>
  );
}

export default Header;
