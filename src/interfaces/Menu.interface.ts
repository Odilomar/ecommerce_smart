import SubMenuInterface from "./SubMenu.interface";

export default interface MenuInterface {
  idMenu: number;
  name: string;
  SubMenu: SubMenuInterface[];
}
