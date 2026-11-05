import logoinstagram from "../assets/logo-instagram.png";
import logofacebook from "../assets/logo-facebook.png";
import logox from "../assets/logo-x.png";
import logoyoutube from "../assets/logo-youtube.png";
import Oie from "../assets/Oie.png";

export default function Reseaux() {
  return (
    <section className="bas">
      <img src={Oie} alt="Oie" className="logo-oie"/>
      <h1 className="mentions">Mentions légales</h1>
      <div className="suivre">
        <h2 className="suivre-titre">Nous suivre:</h2>
        <div className="suivre-logos">
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
