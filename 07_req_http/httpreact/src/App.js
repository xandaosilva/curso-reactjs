import { useEffect, useState } from 'react';

import { useFetch } from './hooks/useFetch';

import './App.css';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  const { data: items, httpConfig, loading } = useFetch(url);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // useEffect(() => {
  //   async function fetchData(){
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { name, price };
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(product),
    // });
    // const addedProduct = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    httpConfig(product, "POST");
    setName("");
    setPrice("");
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {loading && <p>Carregando dados ...</p>}
      {!loading && (
        <ul>
          {items && items.map((item) => (
            <li key={item.id}>{item.name} - {item.price}</li>
          ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar produto" />
        </form>
      </div>
    </div>
  );
}

export default App;
