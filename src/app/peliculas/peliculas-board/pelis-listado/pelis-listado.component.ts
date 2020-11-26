import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/peliculas/class/pelicula';


@Component({
  selector: 'app-pelis-listado',
  templateUrl: './pelis-listado.component.html',
  styleUrls: ['./pelis-listado.component.css']
})
export class PelisListadoComponent implements OnInit {

  @Input() peliculas: Pelicula[];
  @Output() lanzaPelicula = new EventEmitter();


  public p: number;  // paginacion primer page

  constructor() {
    this.p = 1;
  }

  public enviarPelicula(pelicula: Pelicula) {
    this.lanzaPelicula.emit({peliculaLanzada: pelicula});
  }

  ngOnInit(): void {
  }

}
