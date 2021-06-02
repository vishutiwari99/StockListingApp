import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroCard from './components/HeroCard';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="max-w-2xl mx-auto">
        <HeroCard />
        <Table />
      </div>
    </div>
  );
}

export default App;
