import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursosComponent } from "./cursos/cursos.component";

const AppRoutes: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalhesComponent },
    { path: 'curso-nao-encontrado', component: CursoNaoEncontradoComponent },
]

@NgModule({
    imports: [RouterModule.forChild(AppRoutes)],
    exports: [RouterModule]
})

export class CursosRoutingModule { }