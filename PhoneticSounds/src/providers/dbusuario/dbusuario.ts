import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/*
  Generated class for the DbusuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbusuarioProvider {

  url = "http://localhost:3000/api/users";
  url2 = "http://localhost:3000/api/users/login";

  constructor(public http: HttpClient) {
    
  }
  singin(user:Usuariodb){
    return this.http.post<SimpleResponse>(this.url,user);
    
  }
  login(user: Usuariodb){
    return this.http.post<{success: boolean, user: any}>(this.url2,user)
  }
}

export class Usuariodb{
  _id: string;
  nombre: string;
  password: string;
}
export class SimpleResponse{
  success: boolean;
  err:string;

}