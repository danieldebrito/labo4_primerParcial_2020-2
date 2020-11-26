import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/paises/class/pais';
import { PaisesService } from 'src/app/paises/services/paises.service';
import { ActoresFirebaseService } from 'src/app/actores/services/actores-firebase.service';
import { Actor } from 'src/app/actores/class/actor';

@Component({
  selector: 'app-actores-alta',
  templateUrl: './actores-alta.component.html',
  styleUrls: ['./actores-alta.component.css']
})
export class ActoresAltaComponent implements OnInit {

  public paises: Pais[] = [];
  public pais: Pais = {};
  public actor: Actor = {};
  public paisNombre = '';

  constructor(
    private paisesService: PaisesService,
    private actoresService: ActoresFirebaseService,
  ) { }

  public getPaises() {
    this.paisesService.ListarO().subscribe(response => {
        this.paises = response;
    });
  }

  public mostrarPais(event) {
    this.pais = event.paisEnviado;
    this.actor.paisOrigen = this.pais.name;
  }

  public add() {
    this.actor.foto = '/assets/robert_deniro.jpg';
    this.actoresService.addItem(this.actor);
    this.actor = {};
  }

  ngOnInit() {
    this.getPaises();
  }
}
