// Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';



const Item = ({ item }) => (

  

  <div style={{ width: '300px', border: '1px solid #ddd', margin: '10px', padding: '10px', textAlign: 'center' }}>
    <img
      src={item.images[0]} // Utiliza solo la primera imagen si hay varias
      alt={item.name} // Corregí "title" a "name"
      style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Ajusta el tamaño aquí
    />
    <br />
    <h2>{item.name}</h2> {/* Corregí "title" a "name" */}
    <br />
    <p>{`$ ` + item.price}</p>
    
    {/* Botón que redirige a ItemDetailContainer */}
    <br />
    <Link to={`/Detail/${item.id}?item=${JSON.stringify(item)}`}>
    <button
     style={{
      backgroundColor: '#9359BE', // Color de fondo
      color: 'white',             // Color del texto
      padding: '8px 10px',       // Espaciado interno
      fontSize: '16px',           // Tamaño de fuente
      borderRadius: '4px',        // Bordes redondeados
      cursor: 'pointer',          // Cambia el cursor al pasar por encima
    }}>Ver Detalles</button>
    </Link>
   
  </div>
);

export default Item;
