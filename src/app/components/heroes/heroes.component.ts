import { Component, OnInit } from "@angular/core";
import { HeroesService } from "src/app/services/heroes.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: Array<any>;
  heroeToDelete: Object;
  loading: boolean = true;

  constructor(private _heroesService: HeroesService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._heroesService.readHeroes().subscribe(result => {
      this.heroes = result.map(item => {
        return {
          name: item.payload.doc.data()["name"],
          house: item.payload.doc.data()["house"],
          biography: item.payload.doc.data()["biography"],
          id: item.payload.doc.id
        };
      });
      this.loading = false;
    });
  }
}
