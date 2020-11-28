import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/paises/services/paises.service';
import { PeliculasFirebaseService } from 'src/app/peliculas/services/peliculas-firebase.service';

import { Actor } from 'src/app/actores/class/actor';
import { Pelicula } from 'src/app/peliculas/class/pelicula';
import { Pais } from 'src/app/paises/class/pais';
import { ActoresFirebaseService } from 'src/app/actores/services/actores-firebase.service';

@Component({
  selector: 'app-pelis-pais',
  templateUrl: './pelis-pais.component.html',
  styleUrls: ['./pelis-pais.component.css']
})
export class PelisPaisComponent implements OnInit {

  public actores: Actor[] = [];


  public pais: Pais = {};
  public paises: Pais[] = [];

  public filteredValues: Pais[] = [];
  public actoresFiltered: Actor[] = [];

  public peliculas: Pelicula[] = [];

  public p: number;  // paginacion primer page

  constructor(
    private actoresSvc: ActoresFirebaseService,
    private paisesService: PaisesService,
    private peliculasService: PeliculasFirebaseService
  ) { this.p = 1; }

    /*******************   ACTORES  ************************ */
  getActores() {
    this.actoresSvc.getItems().subscribe(response => {
      this.actores = response;
      return response;
    });
  }

  filtrarActores(){
    this.actoresSvc.getItems().subscribe(response => {
      this.actores = response;
      this.actores = response.filter(item => item.paisOrigen !== undefined && item.paisOrigen === this.pais.name);
      return response;
    });

  }

  /*******************   PELICULAS  ************************ */
  public getPeliculas() {
    this.peliculasService.getItems().subscribe(response => {
      this.peliculas = response;

      return response;
    });
  }

  public filtrarPeliculas() {
    this.peliculasService.getItems().subscribe(response => {
      this.peliculas = response;
      this.filteredValues = response.filter(item => item.pais.name !== undefined && item.pais.name === this.pais.name);

      return response;
    });
  }



/*******************   PAISES  ************************ */
  public getPaises() {
    this.paisesService.ListarO().subscribe(response => {
        this.paises = response;
    });
  }

  public mostrarPais(event) {
    this.pais = event.paisEnviado;
    this.filtrarActores();
    this.filtrarPeliculas();
  }

  ngOnInit(): void {
    this.getPaises();
    this.filtrarActores();
    this.filtrarPeliculas();
  }
}
