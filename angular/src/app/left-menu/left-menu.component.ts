import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {CatalogService} from "../services/catalog.service";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent {

    private subscription: Subscription;
    private idCategory:string;
    private menu;

    constructor(private activatedRoute:ActivatedRoute, private router: Router, private catalogService: CatalogService) {
        this.catalogService.getAllCategories().then((menu) => {
            this.menu = menu;
        });
    }

}
