import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Group from "./Group";
import SubGroup from "./SubGroup";

@Entity({
  schema: "soft",
  name: "produto",
})
export default class Product {
  @PrimaryGeneratedColumn({
    name: "id_produto",
    type: "integer",
  })
  id: number;

  @Column({
    name: "tx_nome_produto",
    type: "varchar",
  })
  name: string;

  @Column({
    name: "bl_foto",
    type: "bytea",
    nullable: false,
  })
  file: Buffer;

  @OneToOne(() => Group)
  @JoinColumn({
    name: "id_produto_grupo",
  })
  group: Group;

  @OneToOne(() => SubGroup)
  @JoinColumn({
    name: "id_produto_sub_grupo",
  })
  subgroup: SubGroup;
}
