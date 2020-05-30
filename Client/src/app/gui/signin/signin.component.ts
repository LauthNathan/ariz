import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StringUtils} from '../../utils/string.utils';
import {ISigninLanguage, SigninLanguage} from './signin.language';
import {UserService} from '../../services/user/user.service';
import {LoginDto, UserToCreateDto} from '../../../model';
import {Router} from '@angular/router';
import {NotificationService} from '../../services/notification/notification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  hideSignUp = true;
  hideSignUpConfirmation = true;
  hideLogin = true;
  signIn = true;
  signUp = false;
  signinText: ISigninLanguage;

  signUpForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required
    ])
  });

  formSignIn = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  get nameSignUp() {
    return this.signUpForm.get('name');
  }

  get usernameSignUp() {
    return this.signUpForm.get('username');
  }

  get passwordSignUp() {
    return this.signUpForm.get('password');
  }

  get passwordConfirmationSignUp() {
    return this.signUpForm.get('passwordConfirmation');
  }

  get usernameSignIn() {
    return this.formSignIn.get('username');
  }

  get passwordSignIn() {
    return this.formSignIn.get('password');
  }


  constructor(private readonly signinLanguage: SigninLanguage,
              private readonly userService: UserService,
              private router: Router,
              private readonly notificationService: NotificationService) {
  }

  ngOnInit() {
    this.signinText = this.signinLanguage[localStorage.getItem('arizToolLanguageCode')];
    this.passwordSignUp.valueChanges.subscribe(() => {
      this.checkPassword(this.passwordSignUp.value);
    });
  }

  /**
   * Check the given password and set the corresponding error to the formControl.
   *
   * @param password - The password to check.
   */
  checkPassword(password: string): void {
    if (!StringUtils.containSixChars(password)) {
      this.passwordSignUp.setErrors({toShort: true});
    }
    if (!StringUtils.containNumber(password)) {
      this.passwordSignUp.setErrors({noNumber: true});
    }
    if (!StringUtils.containNormalCase(password)) {
      this.passwordSignUp.setErrors({noNormalCase: true});
    }
    if (!StringUtils.containUppercase(password)) {
      this.passwordSignUp.setErrors({noUpperCase: true});
    }
  }

  /**
   * Set sign in active and sign up inactive.
   */
  setSignInActive(): void {
    this.signIn = true;
    this.signUp = false;
  }

  /**
   * Set sign up active and sign in inactive.
   */
  setSignUpActive(): void {
    this.signIn = false;
    this.signUp = true;
  }

  /**
   * Log the user in the application, or throw an error, if the user send wrong information.
   */
  login() {
    const userToLogin: LoginDto = {
      mail: this.usernameSignIn.value,
      password: this.passwordSignIn.value
    };
    this.userService.login(userToLogin)
      .then(() => {
        this.router.navigate(['dashboard']);
      })
      .catch(() => {
        this.notificationService.addErrorToast(this.signinText.loginError);
      });
  }

  /**
   * Create a new user.
   */
  createUser(): void {
    const userToAdd: UserToCreateDto = {
      mail: this.usernameSignUp.value,
      username: this.nameSignUp.value,
      password: this.passwordSignUp.value,
      role: 1
    };

    this.userService.login(userToAdd).then(() => {
      const userLogin: LoginDto = {
        mail: userToAdd.username,
        password: userToAdd.password
      };
      this.userService.login(userLogin).then(() => {
        this.router.navigate(['dashboard']);
      });
    });
  }
}
