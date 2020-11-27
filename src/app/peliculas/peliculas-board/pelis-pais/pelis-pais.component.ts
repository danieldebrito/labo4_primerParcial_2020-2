import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/paises/services/paises.service';
import { PeliculasFirebaseService } from 'src/app/peliculas/services/peliculas-firebase.service';

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
  public paises: Pais[] = [];
  public filteredValues: Pais[] = [];

  public pais: Pais = {};
  public peliculas: Pelicula[] = [];

  constructor(
    private paisesService: PaisesService,
    private peliculasService: PeliculasFirebaseService
  ) { }

  public getPeliculas() {
    this.peliculasService.getItems().subscribe(response => {
      this.peliculas = response;
      this.filteredValues = response.filter(item => item.pais.name !== undefined && item.pais.name === 'Argentina');
      console.log(this.filteredValues);
    });
  }

  ngOnInit(): void {
    this.getPeliculas();
  }
}
