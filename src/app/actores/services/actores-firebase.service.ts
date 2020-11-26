import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actor } from 'src/app/actores/class/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresFirebaseService {

  actoresCollection: AngularFirestoreCollection<Actor>;
  actorDoc: AngularFirestoreDocument<Actor>;
  actorItems: Observable<Actor[]>;

  constructor(public db: AngularFirestore) {
    this.actoresCollection = this.db.collection('actores');
    this.actorItems = this.actoresCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Actor;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.actorItems;
  }

  public deleteItem(actor: Actor) {
    this.actorDoc = this.db.doc(`actores/${actor.id}`);
    this.actorDoc.delete();
  }

  public addItem(actor: Actor) {
    this.actoresCollection.add(actor);
  }

  public updateItem(actor: Actor) {
    this.actorDoc = this.db.doc(`actores/${actor.id}`);
    this.actorDoc.update(actor);
  }
}
