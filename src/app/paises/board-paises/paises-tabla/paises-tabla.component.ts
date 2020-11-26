import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/paises/class/pais';

@Component({
  selector: 'app-paises-tabla',
  templateUrl: './paises-tabla.component.html',
  styleUrls: ['./paises-tabla.component.css']
})
export class PaisesTablaComponent implements OnInit {

  @Input() paises: Pais[];
  @Output() pasaPais = new EventEmitter();

  public p: number;  // paginacion primer page

  constructor() { this.p = 1; }

  public enviarPais(pais: Pais) {
    this.pasaPais.emit({paisEnviado: pais});
  }

  ngOnInit() {
  }

}
