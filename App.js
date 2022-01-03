import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <Router>
          <NavBar/> 
          <Routes>
            <Route path='/' exact components={Home}/>
            <Route path='/reports' components={Reports}/>
            <Route path='/products' components={Products}/>
          </Routes>
    </Router>
    
  );
}

export default App;
