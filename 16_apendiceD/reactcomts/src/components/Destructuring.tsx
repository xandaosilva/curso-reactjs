import React from 'react'

export enum Category{ JS = "JavaScript", TS = "TypeScript", PY = "Python" };

type Props = { title: string, content: string, commentsQty: number, tags: string[], category: Category };

const Destructuring = ({title, content, commentsQty, tags, category}: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Quantidade de comentários: {commentsQty}</p>
            <div>
                {tags.map((tag) => (<span>#{tag}</span>))}
            </div>
            <h4>Categoria: {category}</h4>
        </div>
    );
}

export default Destructuring;