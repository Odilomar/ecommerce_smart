import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    schema: 'soft',
    name: 'produto_sub_grupo'
})
export default class SubGroup {
    @PrimaryGeneratedColumn({
        name: 'id_produto_sub_grupo',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'tx_produto_sub_grupo',
        type: 'varchar'
    })
    name: string;
}