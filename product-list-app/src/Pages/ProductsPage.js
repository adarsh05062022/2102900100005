import React,{useState,useEffect} from "react";
import axios from "axios"
import {  SimpleGrid,Heading,Box } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/companies/AMZ/categories/PC/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
    <Box p={4}>
      <Heading as="h1" mb={4}>Products</Heading>
      
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
    </>
  );
}
