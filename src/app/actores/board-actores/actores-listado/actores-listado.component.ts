import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/actores/class/actor';

@Component({
  selector: 'app-actores-listado',
  templateUrl: './actores-listado.component.html',
  styleUrls: ['./actores-listado.component.css']
})
export class ActoresListadoComponent implements OnInit {

  @Input() actores: Actor[];
  @Output() lanzaActor = new EventEmitter();
  public p: number;  // paginacion primer page

  constructor() {
    this.p = 1;
  }

  public enviarActor(actor: Actor) {
    this.lanzaActor.emit({actorLanzado: actor});
  }

  ngOnInit(): void {
  }

}
