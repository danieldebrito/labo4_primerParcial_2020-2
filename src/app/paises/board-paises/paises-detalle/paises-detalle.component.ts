import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/paises/class/pais';

@Component({
  selector: 'app-paises-detalle',
  templateUrl: './paises-detalle.component.html',
  styleUrls: ['./paises-detalle.component.css']
})
export class PaisesDetalleComponent implements OnInit {

  @Input() pais: Pais = {};
  @Output() borrarPais = new EventEmitter();

  constructor() { }

  public lanzarBorrado(pais: Pais) {
    this.borrarPais.emit({paisDeshabilitado: pais});
  }

  ngOnInit() {
  }
}
