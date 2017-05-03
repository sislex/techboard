import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import {RequestsService} from "./requests.service";

@Injectable()
export class CatalogService {

    private catalog: object[] = null;

    constructor(private requestsService: RequestsService) { }

    public getAllCategories() {
        console.log('service getAllCategories');
        return new Promise((resolve, reject) => {
            if(!this.catalog){
                this.requestsService.getAllCategories().then((catalog) => {
                    this.catalog = catalog;
                    resolve(this.catalog);
                });
            } else {
                resolve(this.catalog);
            }
        });
    }

}
