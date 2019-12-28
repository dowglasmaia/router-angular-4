import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunosComponent } from './alunos/alunos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const aLunosRoutes: Routes = [
  {
    path: 'alunos', component: AlunosComponent,
    children: [
      { path: 'novo', component: AlunoFormularioComponent },
      { path: ':id', component: AlunoDetalhesComponent },
      { path: ':id/editar', component: AlunosComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(aLunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
