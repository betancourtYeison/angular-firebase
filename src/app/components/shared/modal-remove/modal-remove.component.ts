import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HeroesService } from "src/app/services/heroes.service";

@Component({
  selector: "app-modal-remove",
  templateUrl: "./modal-remove.component.html",
  styles: []
})
export class ModalRemoveComponent implements OnInit {
  @Input() obj: any = {};
  @Output() resetObj: EventEmitter<boolean>;
  loading: boolean = false;

  constructor(private _heroesService: HeroesService) {
    this.resetObj = new EventEmitter();
  }

  ngOnInit() {}

  removeHeroe(id) {
    this.loading = true;
    this._heroesService.removeHeroe(id).then(
      () => {
        this.resetObj.emit(true);
        this.loading = false;
        $("#removeModal").modal("hide");
      },
      error => {
        console.log("error", error);
        this.loading = false;
      }
    );
  }
}
