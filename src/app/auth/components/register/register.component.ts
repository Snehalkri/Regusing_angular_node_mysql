import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service'
// import { AuthService } from './../../../services/auth.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
isLogin: boolean = false
errorMessage:any;
constructor(
private _api: ApiService,
// private _auth: AuthService,
private _router:Router
) { }
ngOnInit() {
}
onSubmit(form: NgForm) {
console.log('Your form data : ', form.value);
this._api.postdata(form.value).subscribe((response:any)=>{
    console.log(response);
} , (error:any)=>{
    console.log(error);
})
}
}
