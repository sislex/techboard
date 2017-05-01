import {Component, OnDestroy} from '@angular/core';
import {DashboardService} from "../services/dashboard.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {

    private subscription:Subscription;

    private user_id;
    private goods;

    constructor(private dashboardService:DashboardService, private activatedRoute:ActivatedRoute, private router:Router) {
        this.subscription = activatedRoute.params.subscribe(params => {
            this.dashboardService.getAllGoods(params['user_id']).then((goods) => {
                this.goods = goods;
            });
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
