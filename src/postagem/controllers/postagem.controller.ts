import { Postagem } from './../entities/postagem.entity';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { PostagemService } from "../entities/services/postagem.service";

@Controller("/postagens")
export class PostagemController {

    constructor(private readonly postagemService: PostagemService) {}

    @Get()
    @HttpCode(HttpStatus.OK) // Http Status 200
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll();
    }
    
    @Get('/:id') // Rota para buscar postagem por ID
    @HttpCode(HttpStatus.OK) // Definir o código HTTP 200 OK explicitamente
    async findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
        return this.postagemService.findById(id)   
    }

    @Get('/titulo/:titulo') // Usar @Get em vez de @get para refletir a sintaxe correta do NestJS
    @HttpCode(HttpStatus.OK)
    async findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
        return this.postagemService.findByTitulo(titulo);
    }
    
    @Post()
    @HttpCode(HttpStatus.CREATED) // Http Status 201
    create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.update(postagem);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    Delete(@Param('id', ParseIntPipe) id: number){
        return this.postagemService.delete(id);
    }
}