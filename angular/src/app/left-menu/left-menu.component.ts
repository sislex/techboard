import { Component, OnInit } from '@angular/core';

import { Http, Response }   from '@angular/http';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  private menu: object[] = [];
  constructor(private http: Http) {

    this.http.get('http://techboard/catalog').subscribe((data: Response) => {
      this.menu = data.json();
    });
  }

  ngOnInit() {
  }

}
