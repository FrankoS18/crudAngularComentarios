import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario';


@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  urlApi:string = "http://localhost:8080/api/comentarios/";

  constructor(private http:HttpClient) { }

  getComentarios():Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.urlApi);
  }

  obtenerComentario(id:string):Observable<Comentario>{
    return this.http.get<Comentario>(this.urlApi+id);
  }

  editarComentario(comentario:Comentario, id:string):Observable<Comentario>{
    return this.http.put<Comentario>(this.urlApi+id, comentario);
  }
  
  guardarComentario(comentario:Comentario):Observable<Comentario>{
    return this.http.post<Comentario>(this.urlApi, comentario);
  }

  eliminarComentario(id:string):Observable<any>{
    return this.http.delete<any>(this.urlApi+id);
  }

}
