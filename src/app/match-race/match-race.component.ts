import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { ICar } from '../car';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-match-race',
  templateUrl: './match-race.component.html',
  styleUrls: ['./match-race.component.css']
})
export class MatchRaceComponent implements OnInit {

  carCtrl = new FormControl();
  carCtrl2 = new FormControl();
  filteredCars1: Observable<ICar[]>;
  filteredCars2: Observable<ICar[]>;
  allCars:ICar[];
  car1="";
  car2="";
  currentCar1:ICar;
  currentCar2:ICar;

  constructor(private _carService: CarsService) {
    
   }

  ngOnInit() {

    this._carService.getCars()
    .subscribe(data => {

      this.allCars = data;
      this.filteredCars1 = this.carCtrl.valueChanges
      .pipe(
        startWith(''),
        map(car => car ? this._filterCars(car) : this.allCars.slice())
      );

      this.filteredCars2 = this.carCtrl2.valueChanges
      .pipe(
        startWith(''),
        map(car => car ? this._filterCars(car) : this.allCars.slice())
      );
    })
  }

  private _filterCars(value: string): ICar[] {
    const filterValue = value.toLowerCase();

    return this.allCars.filter(car => car.Modele.toLowerCase().indexOf(filterValue) === 0 || car.Marque.toLowerCase().indexOf(filterValue) === 0);
  }


  setCar4Race1(pcar: ICar){
    this.currentCar1 = pcar;
  }


  setCar4Race2(pcar: ICar){
    this.currentCar2 = pcar;
  }
}
