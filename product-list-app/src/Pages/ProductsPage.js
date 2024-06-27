import React,{useState,useEffect} from "react";
import axios from "axios"
import { Container, Grid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/companies/AMZ/categories/PC/products?top=10"
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
    <Container>
      <Grid>
      {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            
            <ProductCard product={product} />
          </Grid>
        ))}
     
      </Grid>
    </Container>
    </>
  );
}
