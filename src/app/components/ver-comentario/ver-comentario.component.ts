import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-ver-comentario',
  templateUrl: './ver-comentario.component.html',
  styleUrls: ['./ver-comentario.component.css']
})
export class VerComentarioComponent implements OnInit {

  comentario:Comentario = new Comentario();
  idLocal:string | null;

  constructor(private comentarioService:ComentarioService,
    private aRouter: ActivatedRoute) { 
      this.idLocal = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.obtenerComentario();
  }

  obtenerComentario(){
    this.comentarioService.obtenerComentario(this.idLocal).subscribe(comentario =>{
      this.comentario = comentario;
      console.log(this.comentario.fecha);
    }, error=>{
      console.log(error);
    });
  }


}
