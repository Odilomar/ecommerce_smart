import React from "react";
import { urlApi } from "../../constants/url";
import ProductInterface from "../../interfaces/Product.interface";

import "./product.css";

const Product = () => {
  const products: ProductInterface[] = [
    {
      id: 2725,
      idMenu: 2,
      idSubMenu: 5,
      url: "/tmp/3BC65537-1F33-4BF8-990A-BF37E8FD5387.jpg",
      description:
        "DEB.CL052 - (DESATIVADO) AZUL CANETA COM CORCELER TODA NA PEDRARIA E SAIA FLU FLU VALSA",
      name: "Vestido Azul",
      price: "2000",
      quantity: "477",
    },
    {
      id: 807,
      idMenu: 1,
      idSubMenu: 2,
      url: "/tmp/903CC727-11DE-4975-94E8-E4402AF25661.jpg",
      description: "DB.BL006 - BALADA VESTIDO VERDE JADE ALA UNICA",
      name: "balada jade",
      price: "1800",
      quantity: "220",
    },
    {
      id: 3494,
      idMenu: 3,
      idSubMenu: 7,
      url: "/tmp/E4EC1343-EFC2-4310-B0B8-650078CD3285.jpg",
      description: "VF.122 - AMARELO COM CORPO EM RENDA",
      name: "Amarelo corpo",
      price: "350",
      quantity: "443",
    },
    {
      id: 3949,
      idMenu: 3,
      idSubMenu: 7,
      url: "/tmp/C8CA9A36-7577-466A-9273-BF05F9517E00.jpg",
      description:
        "VF.131-20 - AMARELO COM CORPO TELA BORDADA COM PEDRARIAS E MANGAS TELADAS, SAIA LISA - TAM 20.",
      name: "corpo bordo",
      price: "500",
      quantity: "436",
    },
    {
      id: 797,
      idMenu: 3,
      idSubMenu: 7,
      url: "/tmp/415317D8-185A-4CDD-8088-41FB1F9AD314.jpg",
      description: "VF.NA394 - AZUL COM MIANGAS E BOLERO",
      name: "Vestido Azul mianga",
      price: "350",
      quantity: "9",
    },
    {
      id: 3754,
      idMenu: 2,
      idSubMenu: 4,
      url: "/tmp/7683B812-F808-4286-A233-68633E43F7F4.jpg",
      description:
        "DEB.BL107 - AZUL BEB COM COLO EM TULE E RENDA DOURADA NO CORPO - TAM 42",
      name: "Azul beb",
      price: "2000",
      quantity: "461",
    },
  ];
//   const menuContext = SelectedMenuContext;

  return (
    <main>
      {products.map((product) => (
        <div key={product.id}>
          <img src={`${urlApi}${product.url}`} alt={product.name} width={150} height={200} />
          <label htmlFor="">{product.name}</label>
        </div>
      ))}
    </main>
  );
};

export default Product;
