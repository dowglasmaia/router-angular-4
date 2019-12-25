import { RouterModule, Routes } from '@angular/router';

import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { ModuleWithProviders } from '@angular/core';
import { CursoDetalhesComponent } from './cursos/curso-detalhes/curso-detalhes.component';

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },

    { path: 'curso/:id', component: CursoDetalhesComponent },

    { path: 'curso-nao-encontrado', component: CursoNaoEncontradoComponent },

    { path: 'login', component: LoginComponent },

    { path: '', component: HomeComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);