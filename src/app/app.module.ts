import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { CarsService } from './cars.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { ICar } from './car';
import { MatchRaceComponent } from './match-race/match-race.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CarDetailComponent,
    MatchRaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule

  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  public currentCar : ICar ;
 }
