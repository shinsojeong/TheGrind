import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/app.css';
import Header from './components/Header.js';
import Home from './screen/Home';
import Menu from './screen/Menu';

function App() {
  return (
    <>
      <Header></Header>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
