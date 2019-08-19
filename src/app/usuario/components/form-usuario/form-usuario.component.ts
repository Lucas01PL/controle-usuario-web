import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from './../../../core/model/usuario';
import { UsuarioService } from './../../usuario.service';
import { NgForm } from '@angular/forms';
import { Funcao } from './../../../core/model/funcao';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  @Input() usuario: Usuario;
  @Input() usuarios: Usuario[];
  @Output() usuarioCadastrado = new EventEmitter();

  isSubmitted = false;

  constructor(private us: UsuarioService) {
  }

  ngOnInit() {
  }

  salvar() {
    this.us.salvar(this.usuario).subscribe((data :any) => {
                                                            alert("Cadastro realizado com sucesso.");
                                                            console.log(data.body);
                                                            this.usuarios.push(data.body);
                                                          }, 
                                                  (err) => {
                                                            alert("Não foi possível incluir o registro! \nErro: " + err.status);
                                                        });
    this.usuario = new Usuario();
  }

  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      alert("Campos com valores invalidos ou não informados!")
      return false;
    } else {
      this.usuario.funcao = new Funcao(); 
      this.usuario.funcao.id = form.controls['funcao'].value;
      this.salvar();
    }
  }

  feedback() {
    this.usuarioCadastrado.emit(this.usuario);
  }

}
