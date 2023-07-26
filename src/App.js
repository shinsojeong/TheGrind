import { Route, Routes } from 'react-router-dom';
import './styles/app.css';
import Header from './components/Header.js';
import Home from './screen/Home';
import Menu from './screen/Menu';

function App() {
  return (
    <>
      <Header></Header>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/menu" exact element={<Menu/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
