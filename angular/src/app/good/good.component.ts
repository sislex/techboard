import {Component, OnDestroy} from '@angular/core';
import {GoodService} from "../services/good.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-good',
    templateUrl: './good.component.html',
    styleUrls: ['./good.component.css']
})
export class GoodComponent implements OnDestroy {

    private subscription:Subscription;

    private id;
    private good;

    constructor(private goodService:GoodService, private activatedRoute:ActivatedRoute, private router:Router) {
        this.subscription = activatedRoute.params.subscribe(params => {
            this.goodService.getAllGoods(params['id']).then((goods) => {
                this.good = goods;
            });
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}
