import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroCard from './components/HeroCard';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="max-w-2xl mx-auto">
        <HeroCard />
        <Table />
      </main>
    </div>
  );
}

export default App;
