import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit {

  id: string;
  inscricao: Subscription

  constructor(private route: ActivatedRoute) {
    //this.id = this.route.snapshot.params['id'];
    //console.log(this.route)
  }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
