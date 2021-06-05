import Header from './components/Header';
import HeroCard from './components/HeroCard';
import Home from './page/Home';
import SavedStocks from './page/SavedStocks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <main className="max-w-2xl mx-auto my-2">
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
