import { Component, OnInit } from '@angular/core';
import { PeliculasFirebaseService } from 'src/app/peliculas/services/peliculas-firebase.service';
import { Pelicula } from 'src/app/peliculas/class/pelicula';

@Component({
  selector: 'app-peliculas-alta',
  templateUrl: './peliculas-alta.component.html',
  styleUrls: ['./peliculas-alta.component.css']
})
export class PeliculasAltaComponent implements OnInit {


  public pelicula: Pelicula = {};
  public paisNombre = '';

  constructor(
    private peliculasService: PeliculasFirebaseService,
  ) { }



  public add() {
    this.pelicula.foto = '/assets/killbill.jpg';
    this.peliculasService.addItem(this.pelicula);
    this.pelicula = {};
  }

  ngOnInit() {
    // this.getPaises();
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
