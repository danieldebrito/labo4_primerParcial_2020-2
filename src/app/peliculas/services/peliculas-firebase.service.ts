import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pelicula } from 'src/app/peliculas/class/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasFirebaseService {

  peliculasCollection: AngularFirestoreCollection<Pelicula>;
  peliculaDoc: AngularFirestoreDocument<Pelicula>;
  peliculaItems: Observable<Pelicula[]>;

  constructor(public db: AngularFirestore) {
    this.peliculasCollection = this.db.collection('peliculas');
    this.peliculaItems = this.peliculasCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Pelicula;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.peliculaItems;
  }

  public deleteItem(pelicula: Pelicula) {
    this.peliculaDoc = this.db.doc(`peliculas/${pelicula.id}`);
    this.peliculaDoc.delete();
  }

  public addItem(pelicula: Pelicula) {
    this.peliculasCollection.add(pelicula);
  }

  public updateItem(pelicula: Pelicula) {
    this.peliculaDoc = this.db.doc(`peliculas/${pelicula.id}`);
    this.peliculaDoc.update(pelicula);
  }
}
