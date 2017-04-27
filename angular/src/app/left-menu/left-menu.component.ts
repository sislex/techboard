import { Component, OnInit } from '@angular/core';

import {CatalogService} from "../services/catalog.service";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  private menu;
  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.catalogService.getAllCategories().then((menu) => {
      this.menu = menu;
    });
  }

}
