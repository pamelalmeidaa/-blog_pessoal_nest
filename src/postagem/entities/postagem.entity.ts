import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: "tb_postagens" }) // Define a entidade e o nome da tabela no banco de dados
export class Postagem {

    @PrimaryGeneratedColumn() // Define a coluna como chave primária autoincremental
    id: number;

    @IsNotEmpty() // Validação: não permite título vazio
    @Column({ length: 100, nullable: false }) // Define a coluna no banco de dados
    titulo: string;

    @IsNotEmpty() // Validação: não permite texto vazio
    @Column({ length: 1000, nullable: false }) // Define a coluna no banco de dados
    texto: string;

    @UpdateDateColumn() // Define a coluna como data de atualização automática
    data: Date;

}
