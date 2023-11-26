import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const CartContent = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
    
      <ul>
        {cart.map((product) => (
          <li key={product.id} style={{ marginBottom: '16px' }}>
            <div
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', // Para mover el botón a la derecha
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={product.images}
                  alt={product.name}
                  style={{ width: '50px', height: '50px', marginRight: '16px' }}
                />
                <div>
                  <h3>{product.name}</h3>
                  <p>${product.price} x {product.quantity}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          marginBottom: '16px',
          backgroundColor: '#C6A97E',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
          transition: 'background-color 0.3s',
        }}
        // Cambia el color de fondo al pasar el ratón
        onMouseOver={(e) => (e.target.style.backgroundColor = '#2980b9')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#C6A97E')}
      >
        Volver
      </Link>
    </div>
  );
};

export default CartContent;
