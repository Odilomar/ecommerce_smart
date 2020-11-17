import React from "react";
import ProductInterface from "../../interfaces/Product.interface";

interface ProductProps {
  product: ProductInterface;
}

const Product = ({ product }: ProductProps) => {
  return(
    <h1>Product detail</h1>
  );
};

export default Product;
