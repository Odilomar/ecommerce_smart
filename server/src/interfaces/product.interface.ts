import Group from "./group.interface";
import SubGroup from "./subgroup.interface";

export default interface ProductInterface {
    id: number;
    name: string;
    url: string;
    group: Group;
    subgroup: SubGroup;
}