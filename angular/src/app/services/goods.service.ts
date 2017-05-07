import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import {RequestsService} from "./requests.service";

@Injectable()
export class GoodsService {

    public allFavorites: object[] = null;

    constructor(private http: Http, private requestsService: RequestsService) { }

    public getAllFavorites(id){
        return new Promise((resolve, reject) => {
            this.requestsService.getAllFavorites(id).then((allFavorites) => {
                this.allFavorites = allFavorites;
                resolve(this.allFavorites);
            });
        });
    }

    public getAllGoods(idCategory:string){
        return new Promise((resolve, reject) =>{
            let headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });

            var params = new URLSearchParams();
            params.set('catalog_id', idCategory);

            this.http.post('http://techboard/api/goods', params.toString(), { headers: headers }).subscribe((data: Response) => {
                // this.menu = data.json();
                resolve(data.json());
            }, error => {
                console.log(error);
                reject(error);
            });
        });

    }
    
    

}
