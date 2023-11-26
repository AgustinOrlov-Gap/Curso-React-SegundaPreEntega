import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import CartContent from './components/CartContent/CartContent'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

 

  return (
    <>
    <BrowserRouter>
      <NavBar/>
     
     <Routes>
      <Route exact path='/' element={  <ItemListContainer
            greeting={"Le damos la Bienvenida a nuestra tienda !"}
     />} />
     <Route exact path='/Cart' element={<CartContent/>} />

     <Route exact path='/Detail/:id' element={<ItemDetailContainer/>} />
     
     </Routes>
    
    </BrowserRouter>
   

      
    </>
  )
}

export default App
