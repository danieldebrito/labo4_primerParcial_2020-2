import { Component, OnInit } from '@angular/core';
import { PeliculasFirebaseService } from 'src/app/peliculas/services/peliculas-firebase.service';
import { Pelicula } from 'src/app/peliculas/class/pelicula';

import { ActoresFirebaseService } from 'src/app/actores/services/actores-firebase.service';
import { Actor } from 'src/app/actores/class/actor';

import { Pais } from 'src/app/paises/class/pais';
import { PaisesService } from 'src/app/paises/services/paises.service';


@Component({
  selector: 'app-peliculas-alta',
  templateUrl: './peliculas-alta.component.html',
  styleUrls: ['./peliculas-alta.component.css']
})
export class PeliculasAltaComponent implements OnInit {


  public pelicula: Pelicula = {};
  public paisNombre = '';

  public actores: Actor[] = [];
  public actoresAdd: Actor[] = [];
  public actor: Actor = {};

  public paises: Pais[] = [];
  public pais: Pais = {};

  constructor(
    private peliculasService: PeliculasFirebaseService,
    private actoresSvc: ActoresFirebaseService,
    private paisesService: PaisesService,
  ) { }

  public add() {
    this.pelicula.foto = '/assets/killbill.jpg';
    this.pelicula.actores = this.actoresAdd;
    this.pelicula.pais = this.pais;
    this.peliculasService.addItem(this.pelicula);
    this.pelicula = {};
    this.actoresAdd = [];
  }

  getActores() {
    this.actoresSvc.getItems().subscribe(response => {
      this.actores = response;
      return response;
    });
  }

  public agregarActor(event) {
    this.actoresAdd.push(event.actorLanzado);
    console.log(this.actoresAdd);
  }

  public agregarPais(event){
    this.pais = event.paisEnviado;
  }

  public getPaises() {
    this.paisesService.ListarO().subscribe(response => {
        this.paises = response;
    });
  }

  ngOnInit() {
    this.getActores();
    this.getPaises();
  }
}



/*

  public getPaises() {
    this.paisesService.ListarO().subscribe(response => {
        this.paises = response;
    });
  }

  public mostrarPais(event) {
    this.pais = event.paisEnviado;
    this.actor.paisOrigen = this.pais.name;
  }

*/
