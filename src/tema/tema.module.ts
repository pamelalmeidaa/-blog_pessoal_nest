import { Module } from "@nestjs/common";
import { TemaController } from "./controllers/tema.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaService } from "./services/tema.service";
import { Tema } from "./entities/Tema.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [TemaController],
    exports: [TypeOrmModule]
})
export class TemaModule {}