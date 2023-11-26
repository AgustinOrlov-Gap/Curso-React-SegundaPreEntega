import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { CartProvider } from './components/CartContent/CartContext';

const root = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <ChakraProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ChakraProvider>
);
