import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import {RequestsService} from "./requests.service";

class CategoryModel {
    public id;
    public name;
    public title;
    public description;
    public text;
    public order;
    public parent_id;

    constructor(obj) {
        this.id = obj['id'];
        this.name = obj['name'];
        this.title = obj['title'];
        this.description = obj['description'];
        this.text = obj['text'];
        this.order = obj['order'];
        this.parent_id = obj['parent_id'];
    }


}

@Injectable()
export class CatalogService {

    private categories: CategoryModel[] = null;

    constructor(private requestsService: RequestsService) { }

    public getAllCategories() {
        return new Promise((resolve, reject) => {
            if(!this.categories){
                this.requestsService.getAllCategories().then((categories) => {
                    this.categories = this.makeCollection(categories);
                    resolve(this.categories);
                });
            } else {
                resolve(this.categories);
            }
        });
    }

    private makeCollection(arr) {
        const collection = [];
        for (const obj of arr) {
            collection.push(new CategoryModel(obj));
        }

        return collection;
    }

}
