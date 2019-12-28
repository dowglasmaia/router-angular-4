import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursoService } from '../shared/curso.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html'
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription

  constructor(
    private cursoServices: CursoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.cursos = this.cursoServices.getCursos();
    this.inscricao = this.route.queryParams.subscribe(params => {
      this.pagina = params['pagina'];
    })
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    //this.pagina++;
    this.router.navigate(['/cursos'], { queryParams: { 'pagina': ++this.pagina } })
  }

}
