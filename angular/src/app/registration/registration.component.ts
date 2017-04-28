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

    public registration(name: string, email: string, password: string, confirmPassword: string){
        console.log(name + '; ' + email + '; ' + password + '; ' + confirmPassword + ';');
        this.requestsService.registration(name, email, password);

    }

}
