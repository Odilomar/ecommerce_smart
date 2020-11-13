import React, { useEffect, useState } from "react";
import { urlApi, urlProducts } from "../../constants/url";
import ProductInterface from "../../interfaces/Product.interface";
import api from "../../services/api";
import { DEFAULT_SELECTED_MENU, SelectedMenu } from "../home/Home";

import "./product.css";

interface ProductProps {
  token: string;
  selectedMenu: SelectedMenu;
}

const Product = ({ token, selectedMenu }: ProductProps) => {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const handleProduct = async () => {
    const allProducts = await api.get<ProductInterface[]>(
      `${urlProducts}&idUsuario=2&token=${token}`
    );

    const { data } = allProducts;
    setProducts(data);
  };

  useEffect(() => {
    console.log({ token, selectedMenu });
    if (selectedMenu === DEFAULT_SELECTED_MENU && token !== "") handleProduct();
  }, [token, selectedMenu]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <main>
      {products.map((product) => (
        <div key={product.idProduct}>
          <img src={`${urlApi}${product.url}`} alt={product.name} width={150} height={200} />
          <label htmlFor="">{product.name}</label>
        </div>
      ))}
    </main>
  );
};

export default Product;
