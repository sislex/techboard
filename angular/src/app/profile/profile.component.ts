import {Component, OnDestroy} from '@angular/core';
import {ProfileService} from "../services/profile.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnDestroy {

    private subscription:Subscription;

    private id;
    private users;

    constructor(private profileService:ProfileService, private activatedRoute:ActivatedRoute, private router:Router) {
        this.subscription = activatedRoute.params.subscribe(params => {
            this.profileService.getAllUsers(params['id']).then((users) => {
                this.users = users;
            });
        });
    }

    // public updateProfile(name:string, email:string, phone:string, activatedRoute:ActivatedRoute) {
    //             this.profileService.getUpdadeUser(params['id']).then((users) => {
    //             this.users = users;
    //         });
    //     }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
