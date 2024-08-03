import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tema } from "../entities/tema.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class TemaService{
    constructor(
        @InjectRepository(Tema)
        private temaRepository: Repository<Tema>
    ){}

    async findAll(): Promise<Tema[]>{
        return await this.temaRepository.find({
            relations: {
                postagem: true
            }
        });
    }

    async findById(id: number): Promise<Tema> {
        let buscaTema = await this.temaRepository.findOne({
            where: {
                id
            },
            relations: {
                postagem: true
            }
        });

        if(!buscaTema){
            throw new HttpException("O tema não foi encontrado!", HttpStatus.NOT_FOUND);
        } 

        return buscaTema;
    }
    
    async findByDescricao(descricao: string): Promise<Tema[]> {
        return await this.temaRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`)
            },
            relations: {
                postagem: true
            }
        })
    }

    async create(tema: Tema): Promise<Tema> {
        return await this.temaRepository.save(tema);
    }

    async update(tema: Tema): Promise<Tema> {
        let buscaTema = await this.findById(tema.id);

        if (!buscaTema || !tema.id){
            throw new HttpException("Postagem não encontrada!", HttpStatus.NOT_FOUND);
        }
        return await this.temaRepository.save(tema);
    }

    async delete(id: number): Promise<DeleteResult> {
        let buscaTema = await this.findById(id);

        if (!buscaTema){
            throw new HttpException("Tema não encontrado!", HttpStatus.NOT_FOUND);
        }

        return await this.temaRepository.delete(id)
    }
}