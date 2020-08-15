import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id_produto: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
