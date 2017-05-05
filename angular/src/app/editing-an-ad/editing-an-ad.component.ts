import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {GoodService} from "../services/good.service";
import {CatalogService} from "../services/catalog.service";

@Component({
  selector: 'app-editing-an-ad',
  templateUrl: './editing-an-ad.component.html',
  styleUrls: ['./editing-an-ad.component.css']
})
export class EditingAnAdComponent {

    private catalog;//Список всех категорий каталога
    private blockName: string = 'Создание товара';
    private buttonSaveName: string = 'Создать товар';
    private subscription:Subscription;

    private user_id: number = 1;//Понадобиться чуть позже
    private good_id: number = null;//Передаваемый параметр id товара

    //Переменные для заполнения/редактирования формы
    private good;
    private name;
    private category;
    private description;
    private text;
    private video_link;
    private map;
    private price;
    private title;

    constructor(private activatedRoute:ActivatedRoute, private router:Router, private goodService:GoodService, private catalogService: CatalogService) {
        this.catalogService.getAllCategories().then((catalog) => {
            this.catalog = catalog;
        });
        
        this.subscription = activatedRoute.params.subscribe(params => {
            if(params['good_id']){
                this.blockName = 'Редактирование товара';
                this.buttonSaveName = 'Сохранить изменения';
                this.good_id = params['good_id'];
                console.log("Параметр good_id: " + this.good_id);
                this.goodService.getGood(params['good_id']).then((good) => {
                    this.good = good;
                    this.name = this.good.name;
                    this.category = this.good.catalog_id;
                    this.description = this.good.description;
                    this.text = this.good.text;
                    this.video_link = this.good.video_link;
                    this.map = this.good.map;
                    this.price = this.good.price;
                    this.title = this.good.title;
                });
            }
        });
        this.subscription.unsubscribe();
    }

    editGood(name, category, description, text, video_link, map, price, title){
        this.goodService.editGood(this.good_id, name, category, this.user_id, description, text, video_link, map, price, title);
    }

    ngOnInit(){

    }
}
