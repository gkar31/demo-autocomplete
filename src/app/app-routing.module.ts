import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { MatchRaceComponent } from './match-race/match-race.component';

const routes: Routes = [{
  "path": "carsList", component: CarsListComponent
},
{
  "path": "matchRace", component: MatchRaceComponent
},
{
  "path": "carsList/:id", component: CarDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
