import { useState } from 'react';

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

import './App.css';

import City from "./assets/city.jpg";

function App() {
  const cars = [
    {id: 1, brand: "Ferrari", km: 0, color: "Vermelho", newCar: true},
    {id: 2, brand: "Kia", km: 34343, color: "Branco", newCar: false},
    {id: 3, brand: "Renault", km: 234, color: "Azul", newCar: false},
  ];

  const [message, setMessage] = useState("");

  function showMessage(){
    console.log("Evento do componente pai");
  }

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>

      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* Props */}
      <ShowUserName name="Alexandre"/>

      {/* Destructuring e reaproveitamento*/}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
      ))}

      {/* Fragments */}
      <Fragments propFragment="teste"/>

      {/* Children */}
      <Container myValue="testing 1">
          <p>Este é o conteúdo do primeiro container</p>
      </Container>
      <Container myValue="testing 2">
          <h5>Este é o conteúdo do segundo container</h5>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
