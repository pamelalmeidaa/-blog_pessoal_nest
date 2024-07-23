import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository, UpdateDateColumn } from 'typeorm';
import { Postagem } from '../postagem.entity'; // Verifique o caminho correto e o nome do arquivo da entidade

@Injectable()
export class PostagemService {

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ) {}

    async findAll(): Promise<Postagem[]> {
        // SELECT * FROM tb_postagens;
        return await this.postagemRepository.find();
    }

    async findById(id: number): Promise<Postagem> {
        let postagem = await this.postagemRepository.findOne({
            where: {
                id: id  // Certifique-se de que 'id' corresponda ao nome da coluna em seu banco de dados
            }
        });

        if (!postagem) {
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
        }

        return postagem;
    }

    async findByTitulo(titulo: string): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`) // Correção na interpolação de string
            }
        });
    }
    async create(postagem: Postagem): Promise<Postagem> {
        return await this.postagemRepository.save(postagem);
    }
    async update(postagem: Postagem): Promise<Postagem> {
        let buscarPostagem: Postagem = await this.findById(postagem.id);
        if(buscarPostagem || !postagem.id)
            throw new HttpException('A Postagem não foi encontrada!', HttpStatus.NOT_FOUND)

        return await this.postagemRepository.save(postagem)
    }
    async delete(id: number): Promise<DeleteResult>{
        let buscarPostagem = await this.findById(id);

        if(buscarPostagem)
            throw new HttpException('Postagem não encontada!', HttpStatus.NOT_FOUND);

        return await this.postagemRepository.delete(id);
    }
}
