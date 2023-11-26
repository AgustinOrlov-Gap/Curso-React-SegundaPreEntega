// ItemList.jsx
import React, { useState, useEffect } from 'react';
import Item from './Item';

const ItemList = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud a la API');
        }
        return response.json();
      })
      .then(data => {
        // Tomar solo los primeros 10 elementos
        setData(data.slice(0, 10));
      })
      .catch(error => {
        console.error('Hubo un error:', error);
      });
  }, []); // La dependencia vacía asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {data.map((item, index, cart, setCart) => (
        <Item key={index} item={item} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default ItemList;