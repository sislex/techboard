import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import {GoodsService} from "../services/goods.service";

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

    private controlsVisible: boolean = false;
    private user_id: number = 1;
    private allFavorites;
    

    constructor(private _router: Router, private goodsService: GoodsService) {
        this._router.events.subscribe(() => {
            this.controlsVisible = (this._router.url.split('/')[1] === 'goods');
        });
        this.goodsService.getAllFavorites(this.user_id).then();
    }
    
    ngOnInit() {
    }

}
