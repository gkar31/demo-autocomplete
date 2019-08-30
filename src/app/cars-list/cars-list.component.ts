import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router }  from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CarsService } from './../cars.service';
import { ICar } from './../car';

const CAR_DATA: ICar[] = [
  { _id: "0",
Couple_Nm: 0,
Cylindree: 0,
Cylindres: 0,
Image: "",
Indice_Perf: 0,
Marque: "Loading...",
Modele: "from Server",
Prix: "",
Puissance_ch: 0,
Serie: "",
VitesseMax_Kmh: 0,
acc_0_100: 0,
acc_0_200: 0,
acc_1000m_DA: 0,
acc_400m_DA: 0}
];

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})




export class CarsListComponent implements OnInit  {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['Image', 'Marque', 'Puissance_ch', 'Couple_Nm', 'Indice_Perf'];
  dataSource = new MatTableDataSource(CAR_DATA);



  carsLoading = false;

  constructor(private router: Router, private _carService: CarsService) { }



  ngOnInit() {
    //console.log(this.sort);

    this.carsLoading = true;

    this._carService.getCars()
    .subscribe(data => {

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;

      console.log(this.dataSource);
      this.carsLoading=false;

    },err => {
      console.error(err);
      this.dataSource = new MatTableDataSource(this._carService.getDefaultCar());
      this.dataSource.sort = this.sort;
        this.carsLoading=false;
      });

  }
/*
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
    this.dataSource.sort = this.sort;
    console.log(this.sort);



  }*/


  displayCarsDetail(car){
    //console.log(car);
    this._carService.currentCar = car;
    this.router.navigate(['/carsList', car._id ]);
  }

}
