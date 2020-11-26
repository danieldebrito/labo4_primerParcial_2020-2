import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/actores/class/actor';

@Component({
  selector: 'app-actores-detalle',
  templateUrl: './actores-detalle.component.html',
  styleUrls: ['./actores-detalle.component.css']
})
export class ActoresDetalleComponent implements OnInit {

  @Input() actor: Actor = {};
  @Output() lanzaActor = new EventEmitter();

  constructor() { }

  public lanzarBorrado(actor: Actor) {
    this.lanzaActor.emit({actorLanzado: actor});
  }

  ngOnInit() {
  }
}
