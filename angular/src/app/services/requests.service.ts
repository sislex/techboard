import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';

@Injectable()
export class RequestsService {
    
    constructor(private http: Http) { }

    public registration(name: string, email: string, password: string){
        return new Promise((resolve, reject) =>{
            this.http.get('http://techboard/goods').subscribe((data: Response) => {
                resolve(data.json());
            }, error => {
                console.log(1);
                console.log(error);
                reject(error);
            });
        });
    }

    public editUser(id: string, name: string, email: string, password: string){
        return new Promise((resolve, reject) => {
            let headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });

            var params = new URLSearchParams();
            params.set('id', id);
            params.set('name', name);
            params.set('email', email);
            params.set('phone', password);
            

            this.http.post('http://techboard/api/user-edit', params.toString(), {headers: headers}).subscribe((data:Response) => {
                resolve(data.json());
            }, error => {
                console.log(error);
                reject(error);
            });
        });
    }
}
