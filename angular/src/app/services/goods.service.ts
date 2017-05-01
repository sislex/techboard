import { Injectable } from '@angular/core';
import { Http, Response }   from '@angular/http';

@Injectable()
export class GoodsService {

    constructor(private http: Http) { }

    public getAllGoods(idCategory:string){
        return new Promise((resolve, reject) =>{
            let headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'X-CSRF-TOKEN': 'nLkKnC7B2moeaRChETcgEJqC6oN5qKaVM6YRi4t3',
            });

            var params = new URLSearchParams();
            params.set('catalog_id', idCategory);

            this.http.post('http://techboard/api/goods', params.toString()).subscribe((data: Response) => {
                // this.menu = data.json();
                resolve(data.json());
            }, error => {
                console.log(error);
                reject(error);
            });
        });
        
    }
    
    

}
