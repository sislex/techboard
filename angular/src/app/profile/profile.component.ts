import {Component, OnInit} from '@angular/core';
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
    private name;
    private email;
    private phone;
    private old_password;
    private newPassword;
    private confirmNewPassword;
    private password;
    private message_error: boolean = false;

    constructor(private profileService:ProfileService, private activatedRoute:ActivatedRoute, private router:Router, private requestsService: RequestsService) {
        this.subscription = activatedRoute.params.subscribe(params => {

        });
        this.subscription.unsubscribe();
    }

    edit(name: string, email: string, phone: string){
        // console.log("name: " + name+ ", email: " + email + ", phone: " + phone);
        this.requestsService.editUser(this.users[0].id, name, email, phone);
    }

    editPassword(password: string, newPassword: string, confirmNewPassword: string){
        if(this.password === password){
            // console.log("this.password: " + this.password);
            // console.log("password: " + password);
            if(newPassword === confirmNewPassword && newPassword !== ''){
                // console.log("newPassword: " + newPassword);
                // console.log("confirmNewPassword: " + confirmNewPassword);
                this.profileService.editPassword(this.id, newPassword);
            }
            else {
                this.message_error = true;
            }
        }
        else {
            this.message_error = true;
        }
    }

    ngOnInit(){
        this.profileService.getAllUsers("1").then((users) => {
            this.users = users;
            console.log("users: " + users[0].name);
            this.id = users[0].id;
            this.name = users[0].name;
            this.email = users[0].email;
            this.phone = users[0].phone;
            this.password = users[0].password;
        });
    }

}
