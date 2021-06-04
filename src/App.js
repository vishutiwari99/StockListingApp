import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroCard from './components/HeroCard';
import Table from './components/Table';
import Home from './Home';
import SavedStocks from './components/SavedStocks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      <main className="max-w-2xl mx-auto">
        <HeroCard />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/view" component={SavedStocks} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
