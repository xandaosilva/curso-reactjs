import React, { useState } from 'react'

import "./MyForm.css";

const MyForm = () => {
  // Gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  }

  console.log(name);
  console.log(email);

  return (
    <div>
      {/* Crianção do form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} />
        </div>

        {/* Label envolvendo o input */}
        <label>
          <span>Email:</span>
          <input type="email" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} />
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default MyForm;