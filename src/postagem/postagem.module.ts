import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { PostagemController } from "./controllers/postagem.controller"
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from './entities/services/postagem.service';
 

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [PostagemService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})

export class PostagemModule { }