import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from './../../../services/api.service'
// import { AuthService } from './../../../services/auth.service'
import { Router } from '@angular/router';
@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

}
}