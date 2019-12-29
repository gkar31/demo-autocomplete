import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICar } from './car';
import { ILogo } from './logo';

import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

private _url: string ='https://musclecars.herokuapp.com/carlist'; //'http://localhost:3000/cars';//
private _localLogosUrl: string ="http://localhost:3000/logos";
private _localLogoUrl: string ="http://localhost:3000/logo";

public currentCar:ICar ;
public logos: Observable<ILogo[]> = undefined;
public currentLogo: Observable<ILogo> = undefined;

CAR_DEFAULT_DATA: ICar[] = [
  { _id: "0",
Couple_Nm: 0,
Cylindree: 0,
Cylindres: 0,
Image: "",
Indice_Perf: 0,
Marque: "Error",
Modele: "from Server",
Prix: "",
Puissance_ch: 0,
Serie: "",
VitesseMax_Kmh: 0,
acc_0_100: 0,
acc_0_200: 0,
acc_1000m_DA: 0,
acc_400m_DA: 0,
gallery: {
  pictures: [""],
  videos: [""]
}}
];

  constructor(private http: HttpClient) { }

  getCars(): Observable<ICar[]>{
    return this.http.get<ICar[]>(this._url);
  }


  getCar(idCar): Observable<ICar>{
    return this.http.get<ICar>(this._url+"/"+idCar);
  }


  getDefaultCar(): ICar[] {
      return this.CAR_DEFAULT_DATA;
     }

  getLogoByName(name: String):Observable<ILogo> {
    console.log("find logo for "+name);
    return this.http.get<ILogo>(this._localLogoUrl+'/'+name.toUpperCase());

  }

}
