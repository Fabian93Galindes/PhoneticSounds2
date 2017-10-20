import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the EstadisticasServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class EstadisticasServicioProvider {
  url = "http://192.168.1.10:3000/api/estadisticas";
  url2 = "http://192.168.1.10:3000/api/estadisticas/user";
  
  constructor(public http: HttpClient) {
    console.log('Hello EstadisticasServicioProvider Provider');
  }

  insert (estadi : Estadistica){
    return this.http.post<SimpleResponse>(this.url,estadi);
  }

  getByOne (esta : Estadistica){
    return this.http.post<{success: boolean, user: any}>(this.url2,esta)
  }
  
}

export class Estadistica{
  nombre: string;
  fecha: Date;
  letra: string;
  nivel : number;
}
export class SimpleResponse{
  success: boolean;
  err:string;

}
