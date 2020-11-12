import SubMenuInterface from "./SubMenu.interface";

export default interface MenuInterface {
  id: number;
  name: string;
  subMenu: SubMenuInterface[];
}
