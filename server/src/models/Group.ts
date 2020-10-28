import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}