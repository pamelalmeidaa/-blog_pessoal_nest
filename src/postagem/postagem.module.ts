import { Module } from "@nestjs/common";
import { Postagem } from "./entities/postagem.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controllers/postagem.controller";
import { TemaModule } from "../tema/tema.module";
import { TemaService } from "../tema/services/tema.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService, TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})

export class PostagemModule { }