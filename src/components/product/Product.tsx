import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { urlApi } from "../../constants/url";
import ProductInterface from "../../interfaces/Product.interface";

interface ProductProps {
  product: ProductInterface;
}

const Product = ({ product }: ProductProps) => {
  const history = useHistory();

  useEffect(() => {
    if (!product.idProduct) history.push("/");
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/">Voltar</Link>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col">
            <img
              src={`${urlApi}${product.url}`}
              alt={product.name}
              width={150}
              height={200}
            />
          </div>
          <div className="col">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <label htmlFor="price" className="d-block">{`R$ ${product.price}`}</label>
            <button type="button">Adicionar no carrinho</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
