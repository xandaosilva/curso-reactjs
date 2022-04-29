import React, { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Eduardo", "Mônica", "Laura"]);
    const [users] = useState([
        {id: 1, name:"Eduardo", age: 27 },
        {id: 2, name:"Monica", age: 25},
        {id: 3, name:"Laura", age: 32},
    ]);

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender;