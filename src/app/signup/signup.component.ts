import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Authorization } from '../authorization/authorization.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    user : Authorization;

    emailPattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
    loginPattern = new RegExp("[a-zA-Z0-9_-]{3,15}$");
    passwordPattern = new RegExp("^(?=.*[A-Z])(?=.*[0-9]).{6,32}$");
    firstnamePattern = new RegExp("^[a-zA-Z-]{2,30}$");
    lastnamePattern = new RegExp("^[a-zA-Z-]{2,30}$");

    constructor() {
    }
    ngOnInit() {
        this.user = new Authorization();
        this.resetForm();
    }
    resetForm(form? : NgForm) {
        if (form != null) {
            form.reset();
            this.user = {
                FirstName: '',
                LastName: '',
                Login: '',
                Email: '',
                Password: ''
            }
        }
    }
    OnSubmit(form : NgForm) {
        if (this.emailPattern.test(this.user.Email) &&
        this.loginPattern.test(this.user.Login) &&
        this.passwordPattern.test(this.user.Password) &&
        this.firstnamePattern.test(this.user.FirstName) &&
        this.lastnamePattern.test(this.user.LastName)) {
            console.log('OK');
        } else {
            console.log('ERROR');
        }

    }

}
