import { Injectable } from "@angular/core";
import { Heroe } from "../interfaces/heroe.interface";
import { map } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  constructor(private _angularFirestore: AngularFirestore) {}

  readHeroes() {
    return this._angularFirestore.collection("heroes").snapshotChanges();
  }

  createHeroe(heroe: Heroe) {
    return this._angularFirestore.collection("heroes").add(heroe);
  }

  readUser(id: string) {
    return this._angularFirestore
      .collection("heroes")
      .doc(id)
      .snapshotChanges();
  }

  updateHeroe(heroe: Heroe, id: string) {
    return this._angularFirestore
      .collection("heroes")
      .doc(id)
      .set(heroe);
  }

  removeHeroe(id: string) {
    return this._angularFirestore
      .collection("heroes")
      .doc(id)
      .delete();
  }
}
