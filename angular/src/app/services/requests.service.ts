import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';

@Injectable()
export class RequestsService {
    private headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
    });

    constructor(private http: Http) { }

    public getAllCategories(): Promise<object[]> {
        console.log('request getAllCategories');
        return new Promise((resolve, reject) =>{

            var params = new URLSearchParams();

            this.http.post('http://techboard/api/catalog', params.toString(), { headers: this.headers }).subscribe((data: Response) => {
                // this.menu = data.json();
                resolve(data.json());
            }, error => {
                console.log(error);
                reject(error);
            });
        });
    }

    public registrationUser(name: string, email: string, password: string){
        return new Promise((resolve, reject) =>{
            let headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });

            var params = new URLSearchParams();
            params.set('name', name);
            params.set('email', email);
            params.set('password', password);

            console.log(name);
            console.log(email);
            console.log(password);

            this.http.post('http://techboard/api/registration', params.toString(), {headers: headers}).subscribe((data:Response) => {
                resolve(data.json());
            }, error => {
                console.log(error);
                reject(error);
            });
        });
    }

    public editUser(id: string, name: string, email: string, phone: string){
        return new Promise((resolve, reject) => {

            var params = new URLSearchParams();
            params.set('id', id);
            params.set('name', name);
            params.set('email', email);
            params.set('phone', phone);

            this.http.post('http://techboard/api/user-edit', params.toString(), {headers: this.headers}).subscribe((data:Response) => {
                resolve(data.json());
            }, error => {
                console.log(error);
                reject(error);
            });
        });
    }
}
