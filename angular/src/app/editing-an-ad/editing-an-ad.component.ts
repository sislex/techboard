import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {GoodService} from "../services/good.service";

@Component({
  selector: 'app-editing-an-ad',
  templateUrl: './editing-an-ad.component.html',
  styleUrls: ['./editing-an-ad.component.css']
})
export class EditingAnAdComponent {

    
    private subscription:Subscription;
    private good;
    private user_id;
    private good_id;

    private name;
    private category;
    private description;
    private text;
    private video_link;
    private map;
    private price;

    // name, category, description, text, video_link, map, price
    constructor(private activatedRoute:ActivatedRoute, private router:Router, private goodService:GoodService) {
        console.log(1);
        this.subscription = activatedRoute.params.subscribe(params => {
            console.log(2);
            console.log(params);
            if(params['good_id']){
                console.log("2222222222222222222222222222");
                this.goodService.getGood(params['good_id']).then((good) => {
                    this.good = good;
                    this.name = this.good.name;
                    this.category = this.good.catalog_id;
                    this.description = this.good.description;
                    this.text = this.good.text;
                    this.video_link = this.good.video_link;
                    this.map = this.good.map;
                    this.price = this.good.price;
                });
            }
        });

        this.subscription.unsubscribe();
        console.log(3);
    }

    // editGood(good_id: string, email: string, phone: string){
    //     // console.log("name: " + name+ ", email: " + email + ", phone: " + phone);
    //     this.requestsService.editUser(this.users[0].id, name, email, phone);
    // }
    
    editGood(name, category, description, text, video_link, map, price){
        console.log("name: " + name + ", category: " + category + ", description: " + description + ", text: " + text +
            ", video_link: " + video_link + ", map: " + map + ", price: " + price);
    }

    ngOnInit(){

    }
}
