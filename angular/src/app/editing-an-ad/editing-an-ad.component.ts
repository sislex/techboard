import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editing-an-ad',
  templateUrl: './editing-an-ad.component.html',
  styleUrls: ['./editing-an-ad.component.css']
})
export class EditingAnAdComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    editGood(name, category, description, text, video_link, map, price){
        console.log("name: " + name + ", category: " + category + ", description: " + description + ", text: " + text +
            ", video_link: " + video_link + ", map: " + map + ", price: " + price);
    }

}
