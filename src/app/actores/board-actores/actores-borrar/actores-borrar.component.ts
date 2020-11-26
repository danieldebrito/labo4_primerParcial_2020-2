import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/actores/class/actor';

@Component({
  selector: 'app-actores-borrar',
  templateUrl: './actores-borrar.component.html',
  styleUrls: ['./actores-borrar.component.css']
})
export class ActoresBorrarComponent implements OnInit {

  @Input() actor: Actor = {};
  @Output() lanzaActorBorrar = new EventEmitter();

  constructor() { }

  public lanzarBorrado(actor: Actor ) {
    this.lanzaActorBorrar.emit({actorLanzado: actor});
  }

  ngOnInit() {
  }
}
