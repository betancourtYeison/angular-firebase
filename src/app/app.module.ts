import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";

import { HeroesService } from "./services/heroes.service";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { EditHeroeComponent } from "./components/edit-heroe/edit-heroe.component";
import { EditHeroeResolver } from "./components/edit-heroe/edit-heroe.resolver";
import { ModalRemoveComponent } from "./components/shared/modal-remove/modal-remove.component";

import * as bootstrap from "bootstrap";
import * as $ from "jquery";
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    EditHeroeComponent,
    ModalRemoveComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [HeroesService, EditHeroeResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
