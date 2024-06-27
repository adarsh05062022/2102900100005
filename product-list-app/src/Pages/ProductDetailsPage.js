import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Box, Heading, Text } from '@chakra-ui/react';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/categories/Laptop/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <Text>Loading...</Text>;

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>{product.name}</Heading>
      <Text>Company: {product.company}</Text>
      <Text>Category: {product.category}</Text>
      <Text>Price: ${product.price}</Text>
      <Text>Rating: {product.rating}/5</Text>
      <Text>Discount: {product.discount}%</Text>
    </Box>
  )
};

export default ProductDetailsPage;