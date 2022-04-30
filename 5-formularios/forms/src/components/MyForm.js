import React, { useState } from 'react'

import "./MyForm.css";

const MyForm = ({user}) => {
  // Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email);

    setName("");
    setEmail("");
  }

  return (
    <div>
      {/* Crianção do form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name} />
        </div>

        {/* Label envolvendo o input */}
        <label>
          <span>Email:</span>
          <input type="email" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default MyForm;