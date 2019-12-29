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
  matchResult:ICar;
  race=false;
  winner1=false;
  winner2=false;
  result1: any;
  result2: any;

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

    return this.allCars.filter(car => car.Modele.toLowerCase().indexOf(filterValue) === 0 || car.Marque.toLowerCase().indexOf(filterValue) === 0 );
  }


  setCar4Race1(pcar: ICar){
    this.currentCar1 = pcar;
  }


  setCar4Race2(pcar: ICar){
    this.currentCar2 = pcar;
  }


  doTheRace(car1: ICar , car2: ICar){
    this.winner1=undefined;
    this.winner2=undefined;
    this.result1= Number(car1.Couple_Nm) / Number(car1.acc_400m_DA) ;
    this.result2= Number(car2.Couple_Nm) / Number(car2.acc_400m_DA) ;
    console.log("car1 :"+this.result1);
    console.log("car2 :"+this.result2);
    this.result1= this.result1 + Number(car1.Couple_Nm) / Number(car1.acc_1000m_DA) ;
    this.result2= this.result2 + Number(car2.Couple_Nm) / Number(car2.acc_1000m_DA) ;
    console.log("car1 :"+this.result1);
    console.log("car2 :"+this.result2);

    this.result1= this.result1 + Number(car1.Couple_Nm) / Number(car1.acc_0_100) ;
    this.result2= this.result2 + Number(car2.Couple_Nm) / Number(car2.acc_0_100) ;
    console.log("car1 :"+this.result1);
    console.log("car2 :"+this.result2);

    this.result1= this.result1 + Number(car1.Couple_Nm) / Number(car1.acc_0_200) ;
    this.result2= this.result2 + Number(car2.Couple_Nm) / Number(car2.acc_0_200) ;
    console.log("car1 :"+this.result1);
    console.log("car2 :"+this.result2);

    this.result1= this.result1 + Number(car1.Puissance_ch) / Number(car1.acc_1000m_DA) ;
    this.result2= this.result2 + Number(car2.Puissance_ch) / Number(car2.acc_1000m_DA) ;
    console.log("car1 :"+this.result1);
    console.log("car2 :"+this.result2);

    this.result1= this.result1 + Number(car1.Puissance_ch) / Number(car1.acc_0_200) ;
    this.result2= this.result2 + Number(car2.Puissance_ch) / Number(car2.acc_0_200) ;
    console.log("car1 :"+this.result1);
    console.log("car2 :"+this.result2);

    console.log("winner1 before:"+this.winner1);
    console.log("winner2 before:"+this.winner2);



    if (this.result1>this.result2){
      this.winner1=true;
      
    }else {
      this.winner2=true;
    }

    console.log("winner1 after:"+this.winner1);
    console.log("winner2 after:"+this.winner2);

    this.race=true;
  }
}
