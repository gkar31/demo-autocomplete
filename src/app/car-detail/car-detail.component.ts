import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';

import { CarsService } from './../cars.service';
import { ICar } from './../car';
import { ILogo } from './../logo';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  idCar="";
  carLoading=false;
  safeUrl: SafeResourceUrl[] = [];
  constructor(private route: ActivatedRoute ,private _carService: CarsService,  private _sanitizer: DomSanitizer) { 
    
  }

public currentCar: ICar;
public currentLogo: ILogo;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.idCar = id;
    this.carLoading=true;
    this._carService.getCar(this.idCar).subscribe(data => {
      this.currentCar = data;
      if (this.currentCar.gallery){

        for (let vidUrl of this.currentCar.gallery.videos){
          console.log('Video src :'+vidUrl);
          this.safeUrl.push(this._sanitizer.bypassSecurityTrustResourceUrl(vidUrl));
        }
        console.log("safeUrl : "+this.safeUrl);
        //this.safeUrl=this._sanitizer.bypassSecurityTrustResourceUrl(this.currentCar.gallery.videos[0]);
      }
      console.log(data);
      this._carService.getLogoByName(data.Marque.toUpperCase()).subscribe(data2 => this.currentLogo = data2);
      this.carLoading=false;
    });
  }

}
