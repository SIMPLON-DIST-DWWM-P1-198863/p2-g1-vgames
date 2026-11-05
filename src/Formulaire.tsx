import { useState } from "react";
import './css/formulaire.css'
export default function MonFormulaire() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`message : ${message}, Email : ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="formulaire">
      <h1>Nous contacter:</h1>
      <div className="contact">
        <label htmlFor="email">Adresse email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mess">
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
