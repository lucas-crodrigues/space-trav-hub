import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Rockets from './pages/rockets';
import User from './pages/user';
import Missions from './pages/missions';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
