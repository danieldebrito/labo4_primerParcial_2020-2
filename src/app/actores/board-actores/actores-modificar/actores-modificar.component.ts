import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/actores/class/actor';

@Component({
  selector: 'app-actores-modificar',
  templateUrl: './actores-modificar.component.html',
  styleUrls: ['./actores-modificar.component.css']
})
export class ActoresModificarComponent implements OnInit {

  @Input() actor: Actor = {};
  @Output() lanzaActorModificar = new EventEmitter();

  constructor() { }

  public modificarActor(actor: Actor) {
    this.lanzaActorModificar.emit({actorLanzado: actor});
  }

  ngOnInit() {
  }
}
