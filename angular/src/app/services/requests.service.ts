import { Injectable } from '@angular/core';
import { Http, Response }   from '@angular/http';

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
}
