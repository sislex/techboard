import {Component} from '@angular/core';
import {ProfileService} from "../services/profile.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {RequestsService} from "../services/requests.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    private subscription:Subscription;

    private id;
    private users;

    constructor(private profileService:ProfileService, private activatedRoute:ActivatedRoute, private router:Router, private requestsService: RequestsService) {
        this.subscription = activatedRoute.params.subscribe(params => {
            this.profileService.getAllUsers(params['id']).then((users) => {
                this.users = users;
            });
        });
        this.subscription.unsubscribe();
    }

    edit(name: string, email: string, phone: string){
        // console.log("name: " + name+ ", email: " + email + ", phone: " + phone);
        this.requestsService.editUser(this.users[0].id, name, email, phone);
    }

}
