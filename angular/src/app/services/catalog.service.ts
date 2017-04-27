import { Injectable } from '@angular/core';
import { Http, Response }   from '@angular/http';

@Injectable()
export class CatalogService {

  constructor(private http: Http) { }

  public getAllCategories() {
    return new Promise((resolve, reject) =>{
      this.http.get('http://techboard/catalog').subscribe((data: Response) => {
        // this.menu = data.json();
        resolve(data.json());
      }, error => {
        console.log(1);
        console.log(error);
        reject(error);
      });
    });
  }

}
