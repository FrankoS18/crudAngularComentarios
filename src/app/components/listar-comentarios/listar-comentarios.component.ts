import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-listar-comentarios',
  templateUrl: './listar-comentarios.component.html',
  styleUrls: ['./listar-comentarios.component.css']
})
export class ListarComentariosComponent implements OnInit {

  listaComentarios:Comentario[] = [];

  constructor(private comentarioService:ComentarioService,
    private router:Router) { 
  }

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  obtenerComentarios():void{
    this.comentarioService.getComentarios().subscribe(data => {
      this.listaComentarios = data;
    }, error =>{
      console.log(error);
    });
  }

  eliminarComentario(id:string){
    if(id !== null){
      this.comentarioService.eliminarComentario(id).subscribe(data => {
        this.obtenerComentarios();
      }, error =>{
        console.log(error);
      });
    }
  }



}
