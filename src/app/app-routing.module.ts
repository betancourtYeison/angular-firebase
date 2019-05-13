import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { EditHeroeComponent } from "./components/edit-heroe/edit-heroe.component";
import { EditHeroeResolver } from "./components/edit-heroe/edit-heroe.resolver";

const ROUTES: Routes = [
  { path: "heroes", component: HeroesComponent },
  {
    path: "heroe/:id",
    component: EditHeroeComponent,
    resolve: { data: EditHeroeResolver }
  },
  { path: "**", component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
