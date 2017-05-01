import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';

@Injectable()
export class CatalogService {

    constructor(private http: Http) { }

        public getAllCategories(idCategory: string) {
            return new Promise((resolve, reject) =>{
                let headers = new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });

                var params = new URLSearchParams();
                // params.set('id', 'idCategory');

                this.http.post('http://techboard/api/catalog', params.toString(), { headers: headers }).subscribe((data: Response) => {
                    // this.menu = data.json();
                    resolve(data.json());
                }, error => {
                    console.log(error);
                    reject(error);
                });
            });
        }

}
