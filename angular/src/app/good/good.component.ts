import {Component, OnDestroy} from '@angular/core';
import {GoodService} from "../services/good.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {CatalogService} from "../services/catalog.service";

@Component({
    selector: 'app-good',
    templateUrl: './good.component.html',
    styleUrls: ['./good.component.css']
})
export class GoodComponent implements OnDestroy {

    private subscription:Subscription;

    private id;
    private good;
    private catalog;

    constructor(private goodService:GoodService, private catalogService: CatalogService, private activatedRoute:ActivatedRoute, private router:Router) {
        this.catalogService.getAllCategories().then((catalog) => {
            this.catalog = catalog;
        });

        this.subscription = activatedRoute.params.subscribe(params => {
            this.goodService.getGood(params['id']).then((goods) => {
                this.good = goods;
            });
        });
        
    }

    private getCatalogNameById(catalogId): string {
        console.log(this.catalog);
        let catalogName: string = '';

        if(this.catalog){
            const filterArray = this.catalog.filter((value) => {return value.id == catalogId});
            const categoryObject = filterArray[0];
            catalogName = categoryObject.name;
        }
        return catalogName;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    
}
