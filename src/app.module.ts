import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AppController } from './app.controller';
import { ProdService } from './data/service/prod.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: ProdService, 
      imports: [ConfigModule], 
    }),
    PostagemModule, 
    TemaModule, 
    AuthModule,
    UsuarioModule, 
  ],
  controllers: [AppController], 
  providers: [], 
})
export class AppModule {}
