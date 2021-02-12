import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarComentariosComponent } from './components/guardar-comentarios/guardar-comentarios.component';
import { ListarComentariosComponent } from './components/listar-comentarios/listar-comentarios.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';

const routes: Routes = [
  {path: '', component: ListarComentariosComponent, pathMatch: 'full'},
  {path: 'agregar', component: GuardarComentariosComponent},
  {path: 'editar/:id', component: GuardarComentariosComponent},
  {path: 'ver/:id', component: VerComentarioComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
