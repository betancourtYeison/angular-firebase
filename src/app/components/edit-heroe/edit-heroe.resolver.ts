import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { HeroesService } from "./../../services/heroes.service";

@Injectable()
export class EditHeroeResolver implements Resolve<any> {
  constructor(private _heroesService: HeroesService) {}

  resolve(_activatedRouteSnapshot: ActivatedRouteSnapshot) {
    return new Promise((resolve, reject) => {
      let id = _activatedRouteSnapshot.paramMap.get("id");
      if (id === "new") {
        resolve(null);
      } else {
        this._heroesService.readUser(id).subscribe(data => {
          resolve(data);
        });
      }
    });
  }
}
