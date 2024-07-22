import { Inject,Injectable } from "@nestjs/common"
import { Repository } from "typeorm";
import { Postagem } from "../postagem.entity";


import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PostagemService{

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ) {}

    async findAll(): Promise<Postagem[]>{
        // SELECT * FROM tb_postagens;
        return await this.postagemRepository.find();
    }
}