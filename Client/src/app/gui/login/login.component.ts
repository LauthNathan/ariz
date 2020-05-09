import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ILoginLanguage, LoginLanguage} from './login.language';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginText: ILoginLanguage;

  form = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'password': new FormControl('', [
      Validators.required
    ])
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  constructor(private readonly loginLanguage: LoginLanguage) {
  }

  ngOnInit() {
    this.loginText = this.loginLanguage[localStorage.getItem('arizToolLanguageCode')];
  }

}
