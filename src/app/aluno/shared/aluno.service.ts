import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AlunoService {

  private alunos: any[] = [
    {id: 1, nome: "Kamilly",email: "kamilly@gmail.com" },
    {id: 2, nome: "Kayron Maia",email: "Kayron@gmail.com" },
    {id: 3, nome: "Lucas Lima",email: "Lucas@gmail.com" },
    {id: 4, nome: "Marcelos de Lima",email: "Marcelos@gmail.com" },
    {id: 5, nome: "Dowglas Maia",email: "Dowglas@gmail.com" },
    
  ];

  constructor() { }

  getAlunos() {
    return this.alunos
  }

  getAluno(id: number) {
    let cursos = this.getAlunos();
    for (let i = 0; i < cursos.length; i++) {
      let curso = cursos[i];
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }


}
