import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { HeroesService } from "src/app/services/heroes.service";
import { Heroe } from "src/app/interfaces/heroe.interface";

@Component({
  selector: "app-edit-heroe",
  templateUrl: "./edit-heroe.component.html",
  styles: []
})
export class EditHeroeComponent implements OnInit {
  formData: FormGroup;
  heroe: Heroe;
  houses = [{ code: "marvel", name: "Marvel" }, { code: "dc", name: "DC" }];
  newHeroe: boolean = true;
  id: string;
  heroeToDelete: Object;
  loading: boolean = false;

  constructor(
    private _heroesService: HeroesService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.id = params.id;
      if (this.id === "new") {
        this.newHeroe = true;
      } else {
        this.newHeroe = false;
      }
    });

    this.formData = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", Validators.required),
      house: new FormControl("", Validators.required),
      biography: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
    this._activatedRoute.data.subscribe(routeData => {
      let data = routeData["data"];
      if (data) {
        this.heroe = data.payload.data();
        this.heroe.id = data.payload.id;
        this.id = this.heroe.id;
        this.formData.setValue(this.heroe);
      }
    });
  }

  newHereo() {
    this.formData.reset({
      id: "",
      name: "",
      house: "",
      biography: ""
    });
    this._router.navigate(["/heroe", "new"]);
  }

  save() {
    this.loading = true;
    if (this.newHeroe) {
      this._heroesService
        .createHeroe(this.formData.value)
        .then(res => {
          let { id } = res;
          this._router.navigate(["/heroe", id]);
          this.loading = false;
        })
        .catch(error => {
          console.log("error", error);
          this.loading = false;
        });
    } else {
      this._heroesService
        .updateHeroe(this.formData.value, this.id)
        .then(() => {
          this._router.navigate(["/"]);
          this.loading = false;
        })
        .catch(error => {
          console.log("error", error);
          this.loading = false;
        });
    }
  }

  resetObj(toHome) {
    this.heroeToDelete = null;
    if (toHome) {
      this._router.navigate(["/"]);
    }
  }
}
