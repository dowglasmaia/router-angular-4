
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { CursoDetalhesComponent } from './cursos/curso-detalhes/curso-detalhes.component';
import { CursoService } from './cursos/shared/curso.service';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CursosComponent,
    HomeComponent,
    CursoDetalhesComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
