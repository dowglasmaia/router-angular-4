import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { CursoService } from '../shared/curso.service';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit {

  id: number;
  inscricao: Subscription
  curso: any;


  constructor(
    private route: ActivatedRoute,
    private cursoServices: CursoService,
    private router: Router) {

    //this.id = this.route.snapshot.params['id'];
    //console.log(this.route)
  }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursoServices.getCurso(this.id);
          if(this.curso ==null){
            this.router.navigate(['/curso-nao-encontrado'])
          }

      });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
