import logoinstagram from "../assets/logo-instagram.png";
import logofacebook from "../assets/logo-facebook.png";
import logox from "../assets/logo-x.png";
import logoyoutube from "../assets/logo-youtube.png";
import Oie from "../assets/Oie.png";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router";

export default function Footer() {
  return (
    <section className={styles.bas}>
      <Link to="/">
        <img src={Oie} alt="Oie" className={styles["logo-oie"]} />
      </Link>
      <p className={styles.mentions}>Mentions légales</p>
      <div className={styles.suivre}>
        <p className={styles["suivre-titre"]}>Nous suivre :</p>
        <div className={styles["suivre-logos"]}>
          <a href="https://www.instagram.com/">
            <img src={logoinstagram} alt="logo-instagram" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={logofacebook} alt="logo-facebook" />
          </a>
          <a href="https://x.com/">
            <img src={logox} alt="logo-x" />
          </a>
          <a href="https://www.youtube.com">
            <img src={logoyoutube} alt="logo-youtube" />
          </a>
        </div>
      </div>
    </section>
  );
}
