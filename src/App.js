import './App.css';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Rules from './routes/rules/rules.component';
import { Routes, Route } from 'react-router-dom';
import BingoField from './components/bingo-field/bingo-field.component';
function App() {
  return (
    <Routes>
      <Route Path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="rules" element={<Rules />} />
        <Route path="game" element={<BingoField />} />
      </Route>
    </Routes>
  );
}

export default App;
