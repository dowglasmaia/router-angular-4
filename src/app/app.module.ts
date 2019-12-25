import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CursosComponent,
    HomeComponent,
    CursoDetalhesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
