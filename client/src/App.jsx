import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Registro from "./components/Registro";
import Actualizar from "./components/Actordenes";
import Regorden from "./components/Regordenes";
import ListadoDeOrdenes from "./components/ListadoDeOrdenes"
import Navbar from './components/navbar'
function App(){
  return(

    
    <Router>
      <Navbar />
      <div className='App'>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/registro" element={<Registro />} />
        <Route path="/actualizar_ordenes" element={<Actualizar />}/>
        <Route path="/registrar_ordenes" element={<Regorden />}/>
        <Route path="/lista_de_ordenes" element={<ListadoDeOrdenes />}/>

      </Routes>
      </div>
    </Router>
  )


}

export default App