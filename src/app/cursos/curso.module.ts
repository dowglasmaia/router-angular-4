import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursosComponent } from './cursos.component';
import { CursoService } from './shared/curso.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule      
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