import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://127.0.0.1:9000/api';

  

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getActivos() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/activos').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getActivoById(id_activo) {
    return this.http.get('http://127.0.0.1:9000/api/activos/'+id_activo);
  }

  addActivo(data) {
           return new Promise(resolve => {
            this.http.post(this.apiUrl+'/activos',data).subscribe(data => {
              resolve(data);
            }, err => {
              console.log(err);
            });
          });

        }

}
