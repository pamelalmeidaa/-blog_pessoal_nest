import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class Bcrypt {
  async criptografarSenha(senha: string): Promise<string> {
    let saltos: number = 10;
    return await bcrypt.hash(senha, saltos);
  }

  static async hash(senha: string, saltos: number): Promise<string> {
    return await bcrypt.hash(senha, saltos);
  }

  async compararSenhas(senhaBanco: string, senhaDigitada: string): Promise<boolean> {
    return await bcrypt.compare(senhaDigitada, senhaBanco);
  }

  static async compare(senhaDigitada: string, senhaBanco: string): Promise<boolean> {
    return await bcrypt.compareSync(senhaDigitada, senhaBanco);
  }
}
