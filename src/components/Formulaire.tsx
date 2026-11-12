import { useState } from "react";
import styles from "../styles/Formulaire.module.css";

export default function Formulaire() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`message : ${message}, Email : ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formulaire}>
      <h3>Nous contacter :</h3>
      <div className={styles.contact}>
        <label htmlFor="email">Adresse e-mail :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className={styles.mess}>
        <label htmlFor="message">Message :</label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}
