import { Link } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
    const { user } = useAuthValue();
    const uid = user.uid;
    const {documents: posts, loading} = useFetchDocuments("posts", null, uid);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Gerencie os seus posts</p>
            {posts && posts.length === 0 ? 
                (<div className={styles.noposts}>
                    <p>Não foram encontrados posts</p>
                    <Link to="/posts/create" className="btn">Criar o primeiro post</Link>
                </div>) : 
                (<div>
                    <p>Tem posts</p>
                </div>)
            }
            {posts && posts.map((post) => (
                <h3>{post.title}</h3>
            ))}
        </div>
    )
}

export default Dashboard;