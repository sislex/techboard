import { Component, OnInit } from '@angular/core';
import {GoodsService} from "../services/goods.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    
    private idCategory;
    private goods;
    constructor(private goodsService: GoodsService, private activatedRoute:ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.activatedRoute.params.forEach((value) => {
            this.idCategory = value.idCategory;
            // console.log("this.idCategory = " + this.idCategory);
        });
        this.goodsService.getAllGoods(this.idCategory).then((goods) => {
            this.goods = goods;
        });
    }

}
