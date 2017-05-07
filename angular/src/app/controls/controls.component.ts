import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

    private controlsVisible: boolean = false;

    constructor(private _router: Router) {
        this._router.events.subscribe(() => {
            this.controlsVisible = (this._router.url.split('/')[1] === 'goods');
        });
    }
    
    ngOnInit() {
    }

}
