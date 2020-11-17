import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlApi, urlProducts } from "../../constants/url";
import ProductInterface from "../../interfaces/Product.interface";
import api from "../../services/api";
import { DEFAULT_SELECTED_MENU, SelectedMenu } from "../home/Home";

import "./dashboard.css";

interface ProductProps {
  token: string;
  selectedMenu: SelectedMenu;
  handleSelectedProduct: (product: any) => void;
}

const Dashboard = ({
  token,
  selectedMenu,
  handleSelectedProduct,
}: ProductProps) => {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const handleProduct = async () => {
    const DEFAULT_URL_PRODUCT = `${urlProducts}&idUsuario=2&token=${token}`;
    const { idMenu, idSubMenu, search } = selectedMenu;

    const url =
      selectedMenu === DEFAULT_SELECTED_MENU
        ? DEFAULT_URL_PRODUCT
        : search !== ""
        ? `${DEFAULT_URL_PRODUCT}&search=${search}`
        : idSubMenu === 0 && search === ""
        ? `${DEFAULT_URL_PRODUCT}&idMenu=${idMenu}`
        : idSubMenu > 0 && search === ""
        ? `${DEFAULT_URL_PRODUCT}&idMenu=${idMenu}&idSubMenu=${idSubMenu}`
        : `${DEFAULT_URL_PRODUCT}&idMenu=${idMenu}&idSubMenu=${idSubMenu}&search=${search}`;

    const allProducts = await api.get<ProductInterface[]>(url);

    const { data } = allProducts;
    setProducts(data);
  };

  useEffect(() => {
    console.log({ token, selectedMenu });
    if (token !== "") handleProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, selectedMenu]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <main>
      {products.map((product) => (
        <Link to="/product" key={product.idProduct}>
          <div>
            <img
              src={`${urlApi}${product.url}`}
              alt={product.name}
              width={150}
              height={200}
              onClick={() => {
                handleSelectedProduct(product);
              }}
            />
            <label htmlFor="">{product.name}</label>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default Dashboard;
