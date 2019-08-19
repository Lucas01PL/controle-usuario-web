import { Injectable } from '@angular/core';
import { Usuario } from './../core/model/usuario';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  consultarPorId(id: number) {
    return this.http.get("http://localhost:8080/usuario/" + 1);
    //.subscribe((data: Usuario) => {usuario = this.cloneUsuario(data, usuario);});
  }

  listarTodos() {
    return this.http.get("http://localhost:8080/usuario/");
    //.subscribe((data: Usuario[]) => {data.forEach(element => {usuarios.push(element);});;});
  }

  salvar(usuario: Usuario) {
    return this.http.post<Usuario>("http://localhost:8080/usuario/cadastrar", usuario, {observe: 'response'});
  }

  excluir(id: number) {
    return this.http.delete("http://localhost:8080/usuario/excluir/" + id);
    //.subscribe((data: Usuario) => {usuario = this.cloneUsuario(data, usuario);});
  }

}
