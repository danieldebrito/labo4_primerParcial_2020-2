import { Component, OnInit } from '@angular/core';
import { ActoresFirebaseService } from 'src/app/actores/services/actores-firebase.service';
import { Actor } from 'src/app/actores/class/actor';

@Component({
  selector: 'app-board-actores',
  templateUrl: './board-actores.component.html',
  styleUrls: ['./board-actores.component.css']
})
export class BoardActoresComponent implements OnInit {

  public actores: Actor[] = [];
  public actor: Actor = {};

  constructor(private actoresSvc: ActoresFirebaseService) { }

  getActores() {
    this.actoresSvc.getItems().subscribe(response => {
      this.actores = response;
      return response;
    });
  }

  public mostrarActor(event) {
    this.actor = event.actorLanzado;
  }

  public borrarActor (event) {
    this.actoresSvc.deleteItem(event.actorLanzado);
    // this.getActores();
  }

  ngOnInit(): void {
    this.getActores();
  }
}
