import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
providedIn: 'root'
})
export class ApiService {
baseUrl = 'http://localhost:4000/';
constructor(private _http: HttpClient) {
}
postdata(user:any){
    return this._http.post('/api/post' , user , {responseType : "text"})
}
}
