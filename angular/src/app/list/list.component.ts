import { Component, OnInit } from '@angular/core';
import { Http, Response }   from '@angular/http';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    private goods: object[] = [];

    constructor(private http: Http) {
        
        this.http.get('http://techboard/goods').subscribe((data: Response) => {
            this.goods = data.json();
        });
    }
    
    ngOnInit() {
    }

}
