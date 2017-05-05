import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../services/requests.service";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    public name: string;
    public email: string;
    public password: string;
    public confirmPassword: string;

    constructor(private requestsService: RequestsService) { }

    ngOnInit() {

    }

    public createUser(name: string, email: string, password: string, confirmPassword: string){
        console.log(name + '; ' + email + '; ' + password + '; ' + confirmPassword + ';');
        if(password === confirmPassword){
            this.requestsService.registrationUser(name, email, password);
        }
    }

}
