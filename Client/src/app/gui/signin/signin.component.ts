import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StringUtils} from '../../utils/string.utils';
import {ISigninLanguage, SigninLanguage} from './signin.language';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinText: ISigninLanguage;

  form = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'password': new FormControl('', [
      Validators.required
    ]),
    'passwordConfirmation': new FormControl('', [
      Validators.required
    ])
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordConfirmation() {
    return this.form.get('passwordConfirmation')
  }

  constructor(private readonly signinLanguage: SigninLanguage) {
  }

  ngOnInit() {
    this.signinText = this.signinLanguage[localStorage.getItem('arizToolLanguageCode')];
    this.password.valueChanges.subscribe(() => {
      this.checkPassword(this.password.value);
    });
  }

  /**
   * Check the given password and set the corresponding error to the formControl.
   *
   * @param password - The password to check.
   */
  checkPassword(password: string): void {
    if (!StringUtils.containSixChars(password)) {
      this.password.setErrors({toShort: true});
    }
    if (!StringUtils.containNumber(password)) {
      this.password.setErrors({noNumber: true});
    }
    if (!StringUtils.containNormalCase(password)) {
      this.password.setErrors({noNormalCase: true});
    }
    if (!StringUtils.containUppercase(password)) {
      this.password.setErrors({noUpperCase: true});
    }
  }
}
