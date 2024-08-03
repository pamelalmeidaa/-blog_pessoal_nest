import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "./entities/tema.entity";
import { TemaController } from './controllers/tema.controller';
import { TemaService } from "./services/tema.service";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [TemaController],
    exports: [TypeOrmModule]
})
export class TemaModule {
  static forRoot(arg0: { type: string; host: string; port: number; username: string; password: string; database: string; entities: (typeof import("../postagem/entities/postagem.entity").Postagem | typeof Tema | typeof import("../usuario/entities/usuario.entity").Usuario)[]; synchronize: boolean; logging: boolean; }) {
    throw new Error('Method not implemented.');
  }
}