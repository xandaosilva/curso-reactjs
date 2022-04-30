import React from 'react'

const UserDetails = ({ name, age, job }) => {
    return (
        <div>
            <h2>Informações dos usuários</h2>
            <ul>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Profissão: {job}</li>
            </ul>
            {age >= 18 ? 
                (<div><p>O usuário pode tirar habilitação</p></div>) : 
                (<div><p>O usuário não pode tirar habilitação</p></div>)
            }
        </div>
    );
}

export default UserDetails;