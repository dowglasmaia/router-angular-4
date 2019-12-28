import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';

import { CursoNaoEncontradoComponent } from '../curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalhesComponent } from '../curso-detalhes/curso-detalhes.component';
import { CursoService } from '../shared/curso.service';
import { CursosRoutingModule } from './cursos.routing.module';
import { CursosComponent } from '../cursos/cursos.component';

@NgModule({
    imports: [
        CommonModule,       
        CursosRoutingModule   
    ],
    
    exports: [],

    declarations: [
        CursosComponent,
        CursoDetalhesComponent,
        CursoNaoEncontradoComponent
    ],

    providers: [
        CursoService
    ],
})
export class CursosModule { }