import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {CatalogService} from "../services/catalog.service";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

    private idCategory:string;
    private menu;
    constructor(private activatedRoute:ActivatedRoute, private router: Router, private catalogService: CatalogService) {}

    ngOnInit() {
        // console.log("1111111111");
        this.activatedRoute.params.forEach((value) => {
            this.idCategory = value.idCategory;
            // console.log("this.idCategory = " + this.idCategory);
        });
        this.catalogService.getAllCategories(this.idCategory).then((menu) => {
            this.menu = menu;
        });
    }

}
