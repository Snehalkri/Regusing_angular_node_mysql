import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root'
})
export class AuthService {
constructor() { }
getUserDetails() {
return JSON.parse(localStorage.getItem('userData') || '{}');
}
setDataInLocalStorage(variableName:any, data:any) {
localStorage.setItem(variableName, data);
}
getToken() {
return localStorage.getItem('token');
}
clearStorage() {
localStorage.clear();
}
}