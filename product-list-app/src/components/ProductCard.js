// src/components/ProductCard.js
import React from 'react';
import { Card, CardBody, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardBody>
        <Text variant="h6">{product.name}</Text>
        <Text>{product.company}</Text>
        <Text>{product.category}</Text>
        <Text>Price: ${product.price}</Text>
        <Text>Rating: {product.rating}/5</Text>
        <Text>Discount: {product.discount}%</Text>
        <Link to={`/products/${product.id}`}>View Details</Link>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
