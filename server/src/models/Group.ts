import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import products from "../routes/products.routes";
import Product from "./Product";

@Entity({
    schema: 'soft',
    name: 'produto_grupo'
})
export default class Group {
    @PrimaryGeneratedColumn({
        name: 'id_produto_grupo',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'tx_nome_grupo',
        type: 'varchar'
    })
    name: string;

    // @OneToMany(() => Product, product => product.group)
    // products: Product[];
}