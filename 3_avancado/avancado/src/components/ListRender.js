import React, { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Eduardo", "Mônica", "Laura"]);

    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender;