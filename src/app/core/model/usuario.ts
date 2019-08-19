import { FunctionCall } from '@angular/compiler';
import { Funcao } from './funcao';

export class Usuario {
    public id: number;
    public nome: string;
    public cpf: string;
    public dataNascimento: Date;
    public sexo: string;
    public funcao: Funcao;

    constructor() {

    }
}
