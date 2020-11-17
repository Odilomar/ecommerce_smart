import React, { useEffect, useState } from "react";
import MenuInterface from "../../interfaces/Menu.interface";
import { Dropdown, Button } from "react-bootstrap";

import "./menu.css";
import { urlMenu } from "../../constants/url";
import api from "../../services/api";

interface MenuProps {
  token: string;
  handleSelectedMenu: (idMenu: number, idSubMenu: number) => void;
}

const DEFAULT_MENUS: MenuInterface[] = [
  {
    idMenu: 0,
    name: "",
    SubMenu: [],
  },
];

const Menu = ({ token, handleSelectedMenu }: MenuProps) => {
  const [menus, setMenus] = useState<MenuInterface[]>(DEFAULT_MENUS);

  useEffect(() => {
    if (token !== "") handleMenu();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleMenu = async () => {
    const menusResponse = await api.get<MenuInterface[]>(
      `${urlMenu}&idUsuario=2&token=${token}`
    );

    const { data } = menusResponse;

    console.log(data);

    setMenus(data);
  };

  const showMenu = (menu: MenuInterface) => {
    const DEFAULT_MENU = DEFAULT_MENUS[0];

    if (menu === DEFAULT_MENU) return;

    const { SubMenu } = menu;

    if (SubMenu && SubMenu.length > 0) {
      return (
        <Dropdown key={menu.idMenu}>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            {menu.name}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {SubMenu.map((sMenu) => (
              <Dropdown.Item
                key={sMenu.name}
                onClick={() => {
                  const { idSubMenu, idMenu } = sMenu;
                  handleSelectedMenu(idMenu, idSubMenu);
                }}
              >
                {sMenu.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      );
    } else {
      return (
        <Button
          variant="dark"
          key={menu.idMenu}
          onClick={() => {
            const { idMenu } = menu;
            handleSelectedMenu(idMenu, 0);
          }}
        >
          {menu.name}
        </Button>
      );
    }
  };

  return <nav>{menus.map((menu) => showMenu(menu))}</nav>;
};

export default Menu;
