import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import {RequestsService} from "./requests.service";
import {GoodsService} from "./goods.service";

@Injectable()
export class GoodService {

    private favorites: object[] = null;
    
    constructor(private http:Http,private requestsService: RequestsService, private goodsService: GoodsService) {}

    public  addToFavorites(id, user_id){
        return new Promise((resolve, reject) => {
            this.requestsService.addToFavorites(id, user_id).then((favorites) => {
                this.favorites = favorites;
                this.goodsService.getAllFavorites(user_id).then();
                resolve(this.favorites);
            });
        });
    }

    public getGood(id:string) {
        return new Promise((resolve, reject) => {
            let headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });

            var params = new URLSearchParams();
            params.set('id', id);

            this.http.post('http://techboard/api/good', params.toString(), {headers: headers}).subscribe((data:Response) => {
                resolve(data.json());
            }, error => {
                console.log(error);
                reject(error);
            });
        });

    }

    public editGood(good_id, name, category, user_id, description, text, video_link, map, price, title){
        return new Promise((resolve, reject) => {
            let headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            var params = new URLSearchParams();
            params.set('id', good_id);
            params.set('name', name);
            params.set('catalog_id', category);
            params.set('user_id', user_id);
            params.set('description', description);
            params.set('text', text);
            params.set('video_link', video_link);
            params.set('map', map);
            params.set('price', price);
            params.set('title', title);

            this.http.post('http://techboard/api/good-edit', params.toString(), {headers: headers}).subscribe((data:Response) => {
                resolve(data.json());
            }, error => {
                console.log(error);
                reject(error);
            });
        })
    }
    
    public delGood(id){
        return new Promise((resolve, reject) => {
            let headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            var params = new URLSearchParams();
            params.set('id', id);

            this.http.post('http://techboard/api/good-del', params.toString(), {headers: headers}).subscribe((data:Response) => {
                resolve(data.json());
            }, error => {
                console.log(error);
                reject(error);
            });
        })
    }

}
