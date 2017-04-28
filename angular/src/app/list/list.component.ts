import { Component, OnInit } from '@angular/core';
import {GoodsService} from "../services/goods.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    private goods;
    constructor(private goodsService: GoodsService) {}

    ngOnInit() {
        this.goodsService.getAllGoods().then((goods) => {
            this.goods = goods;
        });
    }

}
