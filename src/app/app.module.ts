import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardarComentariosComponent } from './components/guardar-comentarios/guardar-comentarios.component';
import { ListarComentariosComponent } from './components/listar-comentarios/listar-comentarios.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    GuardarComentariosComponent,
    ListarComentariosComponent,
    NavBarComponent,
    VerComentarioComponent
  ],
  imports: [ 
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
