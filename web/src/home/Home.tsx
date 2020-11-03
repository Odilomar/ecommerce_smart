import React, { useEffect, useState } from "react";
import api from "../services/api";

import "./home.css";

interface Menu {
  id: number;
  name: string;
}

interface SubGroup {
  id: number;
  name: string;
}

interface Group {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  url: string;
  group: Group;
  subgroup: SubGroup;
}

const Home = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const logo =
    "data:image/png;base64,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";
  //   const avatar =
  //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAn1BMVEX///8PHjEAAAD9//4AAA7a2tsAAB5vdn+EipEPHjIOHzEACyQRHzD//v0AAA0AABsAABUAABcAACGkqK4AAAj+//sAABMAECff4OKusrjp6usKGy/Jy9Cjo6dKUFwACydTWWIkKzbz9PUuNEGytrlma3Q4P0sgLTx8f4eRk5nQ1NeZnaUFGSwWIjnu8PeHiZNESFW/xMcrMkMAASZbX2Z6Z6HWAAAEm0lEQVR4nO3cDXeaOhwG8ASsmkhAEMSKLy2t1qq7W3v9/p/tJkh316rBlu2QsOe3s25nZ/bkOQn554WNEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgLYR5a+uEMRttCV/UpHSbW8+IoQrJUJU/1UbtTRWSSTq62y+WMaOn96Ntsc/dtuTWj550919EKQZo5SlQfAwykm7utW9vQ8yxj1a2gcPj0236bfKD3HGOWWsDMg8vvdXORFtmVanD13GVboiofoi09LuOm+6Yb+HK/KnAT1nWURMmm5gXS7J1+cDUh4t3FbUxk3AzgZklIXPcj61PuQsyPj5LpQ/BhPL46mpcrH0zidUIQcrYvcyXDZ+O2Te+VFaCCaW131B+hHXJezurE/o04tjVM02+29NN7EWIcQ/joyhyeg5Vi+/ZR147Gh6UCWMZ023shaXjAJ9Qja8bbqRtQiyi/QJaXfUdCNraX/ChMyrRml4xSg1eJMlyItPteWCV840LjH59DEhuVMxSp3qbyLMXRQIWeuiTJePZ0/V36Z3Z/RWuR9wrlu1zXUfLnbHm9Ax+kxnG+qWNKw70X5aDoLvztjw6XaRXhqh8qfaPekesoR8jzuGB5Tbp0sJOWVy86Rbl8oejJ2R8Wc5/SFnjHknCeWf+buLFzVCVQmy8eORyeWwIPLFwDvNpw5No4PugzLXZmj6M0iOB/oPg7PzaXc91X1SkE0QjsythW/UCCtOhE+6MPxRFdC3oAdL+Wq8L2cXOb8Up/v7cS8/mULe9VdflQnje/CnUdbNmIzGVDrO08B7X8WPx6ZlYKHWaf2OY00PEhXAnVMnWu4Z5ftB13kancyPq0Py/11/Qvq+VQHdouhNdr11tszWm/mEfKwSYuZ07ty3XkzkM2h8of+gPLpX9/hvyT48Yi/d4MfPFfYmDC0LWEnGnqXFfZvq7k0wbFtANdOQ7b68Uuz7revBYsgKchMVEfuxb1OZuFbxdE460WsuZ1HtptFaQi2wp+FyHDj29KAqEmrudM8TMlTi/lI15MM4vY/aOMm8/UZNN9O1PT1YcKeTG53Jyeo7t+nWe3rbu3uKxp3Lhv++HnqPKmURSxw70vAd75Fs6+1h3Bmk2sNEKUsHnXD16Nr3DthtGqa6w+5feDyNvxl9YPiRnEG3r53ycvuKlHJHxfed9U3T7f6MnZ/ya7KV1DtgLB3bcpMoy9/meAp8fUT1rhvPhv2m234NVdJ64zNnh9eQEc0vFXJOHMVM+4KJpidjK+abrSPH3NcSeszRX2MYIVmk/BMP4DvcW2rPiM3w4ugu0yoSMupsja/8q5R+OaE06Bl9qS1NI+2LepUyOjV8/TYb01p9SOMbwxM+B/RrtbDE5MrG6ICkN/jMUuaM4LnpCBVkwnqjNDJ96dZberUTGj9Kaz2HtGtDwloPIhI2DgmREAmbh4RIiITNQ8JWJKy3QZQJjT6m+SsS1tod2pGw3imG8QlXTl2bpiP89cSFd2eultjypkIdZt8huqTmf3UhrP6XzwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/8B5j+RNNE1LHjAAAAAElFTkSuQmCC";
  const avatar =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7M7gaAhGZBTuxN8OGYTa_19fG1cdi437PPw&usqp=CAU";

  const handleMenu = async () => {
    const menu = await api.get<Menu[]>("/menu");

    setMenus(menu.data);
  };

  const handleProducts = async (group_id?: number) => {
    const products = group_id
      ? await api.get(`/product/?group_id=${group_id}`)
      : await api.get("/product");

    setProducts(products.data);
  };

  useEffect(() => {
    handleMenu();
    handleProducts();
  }, []);

  return (
    <>
      <header id="header">
        <img src={logo} alt="Logo da loja" width={100} height={100} />
        <div>
          <input type="search" name="" id="" />
          <button type="button">Pesquisar</button>
        </div>
        <div>
          <img src={avatar} alt="" width={100} />
          <h5 id="user_name">Alberto Almeida</h5>
        </div>
      </header>

      <hr />

      <nav>
        {menus.map((menu) => (
          <button
            type="button"
            key={menu.id}
            onClick={() => {
              console.log(menu.id);
              handleProducts(menu.id);
            }}
          >
            {menu.name}
          </button>
        ))}
      </nav>

      <hr />

      <main>
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.url}
              alt={product.name}
              width={150}
              height={200}
            />
            <label htmlFor="">{product.name}</label>
          </div>
        ))}
      </main>
    </>
  );
};

export default Home;
