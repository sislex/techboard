import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';

@Injectable()
export class DashboardService {

    constructor(private http:Http) {
    }

    public getAllGoods(user_id:string) {
        return new Promise((resolve, reject) => {
            let headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });

            var params = new URLSearchParams();
            params.set('user_id', user_id);

            this.http.post('http://techboard/api/user-dashboard-goods', params.toString(), {headers: headers}).subscribe((data:Response) => {
                resolve(data.json());
            }, error => {
                console.log(error);
                reject(error);
            });
        });

    }

}
