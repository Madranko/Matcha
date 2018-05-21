import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Authorization } from '../authorization/authorization.model';
import { Patterns } from '../authorization/patterns.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    user : Authorization;
    patterns : Patterns;

    constructor() {
    }
    ngOnInit() {
        this.user = new Authorization();
        this.patterns = new Patterns();
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
    OnSubmit(form: NgForm) {
        if (this.patterns.emailPattern.test(this.user.Email) &&
        this.patterns.loginPattern.test(this.user.Login) &&
        this.patterns.passwordPattern.test(this.user.Password) &&
        this.patterns.firstnamePattern.test(this.user.FirstName) &&
        this.patterns.lastnamePattern.test(this.user.LastName)) {
            console.log('OK');
        } else {
            console.log('ERROR');
        }

    }

}
