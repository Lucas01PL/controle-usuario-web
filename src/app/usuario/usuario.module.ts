import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';
import { ListUsuarioComponent } from './components/list-usuario/list-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormUsuarioComponent, ListUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  exports: [
    FormUsuarioComponent,
    ListUsuarioComponent
  ],

  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
