import logo from './logo.svg';
import './App.css';

import "@fortawesome/fontawesome-free/css/all.min.css";
//import "./assets/styles/tailwindcss.css"

import Profile from './pages/Profile';
import Formacao from './pages/Formacao';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <>
    //   <Profile/>
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Profile/>} />
          <Route path="/form" element={<Formacao/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
