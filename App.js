import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import RandomBeer from './components/RandomBeer/RandomBeer';
import ListBeers from './components/ListBeers/ListBeers';
import NewBeer from './components/NewBeer/NewBeer';
import SingleBeer from './components/SingleBeer/SingleBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/:id" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
