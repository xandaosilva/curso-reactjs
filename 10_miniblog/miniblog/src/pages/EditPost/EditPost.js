import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useFetchDocument } from "../../hooks/useFetchDocument";

import styles from "./EditPost.module.css";

const EditPost = () => {
    const { id } = useParams();
    const { document: post } = useFetchDocument("posts", id);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    useEffect(() => {
        if(post){
            setTitle(post.title);
            setImage(post.image);
            setBody(post.body);
            const textTags = post.tags.join(", ");
            setTags(textTags);
        }
    }, [post]);

    const {updateDocument, response} = useUpdateDocument("posts");
    const {user} = useAuthValue();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormError("");

        try {
            new URL(image);
        } catch (error) {
            setFormError("A imagem precisa ser uma URL");
        }

        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

        if(!title || !image || !tags || !body){
            setFormError("Pro favor, preencha todos os campos!");
        }

        if(formError) return;

        const data = { title, image, body, tags: tagsArray, uid: user.uid, createdBy: user.displayName };

        updateDocument(id, data);
        navigate("/dashboard");
    }
    
    return (
        <div className={styles.edit_post}>
            {post && (
                <>
                    <h2>Editando post: {post.title}</h2>
                    <p>Altere os dados do post como desejar</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Título:</span>
                            <input type="text" name="title" required placeholder="Pense em um bom título..." onChange={(e) => setTitle(e.target.value)} value={title} />
                        </label>
                        <label>
                            <span>URL da imagem:</span>
                            <input type="text" name="image" required placeholder="Insira uma imagem que represente o seu post" onChange={(e) => setImage(e.target.value)} value={image} />
                        </label>
                        <p className={styles.preview_title}>Preview da imagem atual:</p>
                        <img  className={styles.image_preview} src={post.image} alt={post.title} />
                        <label>
                            <span>Conteúdo:</span>
                            <textarea name="body" required placeholder="Insira o conteúdo do post" onChange={(e) => setBody(e.target.value)} value={body}></textarea>
                        </label>
                        <label>
                            <span>Tags:</span>
                            <input type="text" name="tags" required placeholder="Insira as tagas separadas por vírgula" onChange={(e) => setTags(e.target.value)} value={tags} />
                        </label>
                        {!response.loading && <button className="btn">Editar</button>}
                        {response.loading && <button className="btn" disabled>Aguarde...</button>}
                        {response.error && <p className="error">{response.error}</p>}
                        {formError && <p className="error">{formError}</p>}
                    </form>
                </>
            )}
        </div>
    )
}

export default EditPost;