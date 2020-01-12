import { AlunoService } from './../shared/aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: any[];
 

  constructor(
    private alunoServices: AlunoService
  ) { }

  ngOnInit() {
    this.getAlunos();

    
  }

  getAlunos() {
    this.alunos = this.alunoServices.getAlunos();
    console.log(this.alunos)
  }

}
