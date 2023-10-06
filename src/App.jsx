import React from 'react';
import Mensaje from './componentes/Mensaje/Mensaje';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';

/*Componentes: conjunto de elementos que cumplen la misma función en la interfaz del usuario*/

/*
Caracteristicas: 

- Renderizar un único elemento. 
- Pueden enviar props (propiedades)
- Tiene un estado. 


Las props son objetos que pasan los componentes padres a los componentes hijos

*/

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Mis Productos" />
      <ItemCount stock={10}/>
      <ItemCount stock={5}/>
      <ItemCount stock={20}/>
    </>
  )
}

export default App

// const props = {
//   saludo: "Hola, este es el primer after",
//   dia: "viernes",
//   numero: 6
// };
