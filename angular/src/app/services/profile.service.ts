import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';

@Injectable()
export class ProfileService {

    constructor(private http:Http) {
    }

    public getAllUsers(id:string) {
        return new Promise((resolve, reject) => {
            let headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });

            var params = new URLSearchParams();
            params.set('id', id);
            console.log(id);

            this.http.post('http://techboard/api/users', params.toString(), {headers: headers}).subscribe((data:Response) => {
                resolve(data.json());
            }, error => {
                console.log(error);
                reject(error);
            });
        });

    }
    public getUpdadeUser(id:string, name:string, email:string, phone:string) {
        return new Promise((resolve, reject) => {
            let headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });

            var params = new URLSearchParams();
            params.set('id', id);

            this.http.post('http://techboard/api/users', params.toString(), {headers: headers}).subscribe((data:Response) => {
                resolve(data.json());
            }, error => {
                console.log(error);
                reject(error);
            });
        });
    }

    public editPassword(id:string, newPassword:string) {
        return new Promise((resolve, reject) => {
            let headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });

            var params = new URLSearchParams();
            params.set('id', id);
            params.set('password', newPassword);

            this.http.post('http://techboard/api/user-edit-password', params.toString(), {headers: headers}).subscribe((data:Response) => {
                resolve(data.json());
            }, error => {
                console.log(error);
                reject(error);
            });
        });
    }
    
}
