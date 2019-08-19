import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/core/model/usuario';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  @Input() usuarios: Usuario[];

  constructor() {
  }

  ngOnInit() {
  }

}
