import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-guardar-comentarios',
  templateUrl: './guardar-comentarios.component.html',
  styleUrls: ['./guardar-comentarios.component.css']
})
export class GuardarComentariosComponent implements OnInit {

  formulario:FormGroup;
  titulo: string = "Crear Producto";
  id:string | null;

  constructor(
    private fb:FormBuilder ,
    private router:Router,
    private aRoute: ActivatedRoute,
    private comentarioService:ComentarioService) {
      this.formulario = this.fb.group({
        titulo: ['', Validators.required],
        creador: ['', Validators.required],
        texto: ['', Validators.required]
      });

      this.id = this.aRoute.snapshot.paramMap.get('id');

     } 

  ngOnInit(): void {
    this.esEditar();
  }

  guardarComentario(){
    let comentario: Comentario = {
      titulo: this.formulario.get('titulo')?.value,
      creador: this.formulario.get('creador')?.value,
      texto: this.formulario.get('texto')?.value,
      fecha: ""
      
    }


    if (this.id !== null) {
      this.comentarioService.editarComentario(comentario, this.id).subscribe(data =>{
        this.router.navigate(['/']);
      });
    }else{
      this.comentarioService.guardarComentario(comentario).subscribe(data => {
        this.router.navigate(['/']);
      });

    }
    

  }

  esEditar(){
    if(this.id !== null){
      this.titulo = "Editar Producto";
      this.comentarioService.obtenerComentario(this.id).subscribe(comentario => {
        this.formulario.setValue({
          titulo: comentario.titulo, 
          creador: comentario.creador, 
          texto: comentario.texto
        });
      }, error=>{
        console.log(error);
      });
    }else{
      this.titulo = "Crear Producto";
    }
  }

}
