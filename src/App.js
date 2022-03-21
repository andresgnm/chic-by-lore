import React from 'react'
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { About } from './pages/Nosotros';
import { Inicio } from './pages/Inicio';



function App() {
  return (
    <Router>
        <Inicio />
        {/* <Routes>
          <Route path='/' exact element={< Home></Home> } />
          <Route path='/about' exact element={< About></About> } />
        </Routes> */}
    </Router>
  );
}

export default App;
