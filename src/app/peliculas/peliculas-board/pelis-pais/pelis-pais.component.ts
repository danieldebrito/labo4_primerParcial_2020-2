import { Component, OnInit } from '@angular/core';

import { Actor } from 'src/app/actores/class/actor';
import { Pelicula } from 'src/app/peliculas/class/pelicula';
import { Pais } from 'src/app/paises/class/pais';


@Component({
  selector: 'app-pelis-pais',
  templateUrl: './pelis-pais.component.html',
  styleUrls: ['./pelis-pais.component.css']
})
export class PelisPaisComponent implements OnInit {

  public actores: Actor[] = [];
  public pais: Pais = {};
  public peliculas: Pelicula[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
