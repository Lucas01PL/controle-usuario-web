import { Component } from '@angular/core';
import { Usuario } from './core/model/usuario';
import { UsuarioService } from './usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controle-usuario-web';

  usuario: Usuario;
  usuarios: Usuario[];

  constructor(private us: UsuarioService) {
    this.usuario = new Usuario();
    us.listarTodos().subscribe((data: Usuario[]) => {this.usuarios = data;});
  }

  reciverFeedback(resposta) {
  }
}
