import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    {id: 1, brand: "Ferrari", km: 0, color:"Vermelho"},
    {id: 2, brand: "BMW", km: 30000, color:"Preto"},
    {id: 3, brand: "VW", km: 15500, color:"Azul"},
    {id: 4, brand: "Renault", km: 100000, color:"Preto"},
    {id: 5, brand: "Ford", km: 42780, color:"Prata"}
  ];

  return (
    <div className="App">
      <h1>Lista de carros</h1>
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
      ))}
    </div>
  );
}

export default App;
