import '@fontsource/jost/400.css'
import '../../styles/header.css'
import logo from '../../assets/Oie.png'
import avatar from '../../assets/avatar.png'

function Header() {
  return (
    <header>
      <a href="/"><img className="header-logo" src={logo} alt="Logo du site" /></a>

      <h1><a href="/">The Honk Zone</a></h1>

      <div>
        <a href="/"><img src={avatar} alt="Avatar placeholder" /></a>
        <a className="header-connexion" href="#">Connexion</a>
      </div>

      <label className="header-burger">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav className="header-menu">
        <a className="header-btn" href="#">Page d'accueil</a>
        <a className="header-btn" href="#">Catalogue de jeux</a>
        <a className="header-btn" href="#">Sorties des jeux à venir</a>
      </nav>
    </header>
  )
}

export default Header