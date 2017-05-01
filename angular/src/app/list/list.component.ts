import { Component, OnInit, OnDestroy } from '@angular/core';
import {GoodsService} from "../services/goods.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnDestroy {
    private subscription: Subscription;
    
    private idCategory;
    private goods;
    constructor(private goodsService: GoodsService, private activatedRoute:ActivatedRoute, private router: Router) {
        this.subscription = activatedRoute.params.subscribe(params => {
            this.goodsService.getAllGoods(params['idCategory']).then((goods) => {
                this.goods = goods;
            });
        });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}
