
import './App.css';


import { ChakraProvider } from '@chakra-ui/react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductsPage from './Pages/ProductsPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';

function App() {
  return (
    <ChakraProvider>
       <Router>
      <Routes>
        <Route exact path="/" element={<ProductsPage/>} />
        <Route exact path="/products/:productId" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  </ChakraProvider>
  );
}

export default App;
