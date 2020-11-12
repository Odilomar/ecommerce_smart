import React, { useEffect, useState } from "react";
import MenuInterface from "../../interfaces/Menu.interface";
import { Dropdown, Button } from "react-bootstrap";

import "./menu.css";

interface MenuProps {
  token: string;
}

const DEFAULT_MENUS: MenuInterface[] = [
  {
    id: 0,
    name: "",
    subMenu: [],
  },
];

const Menu = ({ token }: MenuProps) => {
  const [menus, setMenus] = useState<MenuInterface[]>(DEFAULT_MENUS);

  useEffect(() => {
    console.log(token);
  }, [token]);

  const showMenu = (menu: MenuInterface) => {
    const DEFAULT_MENU = DEFAULT_MENUS[0];
    
    if(menu === DEFAULT_MENU) return;

    const { subMenu } = menu;

    if (subMenu.length > 0) {
      return (
        <Dropdown key={menu.id}>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            {menu.name}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {subMenu.map((sMenu) => (
              <Dropdown.Item key={sMenu.name}>{sMenu.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      );
    } else {
      return (
        <Button variant="dark" key={menu.id}>
          {menu.name}
        </Button>
      );
    }
  };

  return <nav>{menus.map((menu) => showMenu(menu))}</nav>;
};

export default Menu;
