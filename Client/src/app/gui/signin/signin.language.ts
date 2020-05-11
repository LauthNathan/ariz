export interface ISigninLanguage {
  email: string;
  name: string;
  password: string;
  submit: string;
  nameErrorRequired: string;
  emailErrorPattern: string;
  emailErrorRequired: string;
  passwordRequired: string;
  passwordToShort: string;
  passwordNoNumber: string;
  passwordNoNormalCase: string;
  passwordNoUpperCase: string;
  passwordConfirmation: string;
  passwordConfirmationErrorRequired: string;
  slogan: string;
  login: string;
  register: string;
  forgotPassword: string;
}

export class SigninLanguage {
  gb: ISigninLanguage = {
    email: 'Email',
    name: 'Username',
    password: 'Password',
    submit: 'Submit',
    emailErrorPattern: 'Please enter a valid email address',
    emailErrorRequired: 'Email is required',
    nameErrorRequired: 'Username is required',
    passwordRequired: 'Password is required',
    passwordToShort: 'Your password needs at least 6 chars',
    passwordNoNumber: 'Your password needs at least 1 number',
    passwordNoNormalCase: 'Your password needs at least 1 normal case',
    passwordNoUpperCase: 'Your password needs at least 1 upper case',
    passwordConfirmation: 'Password confirmation',
    passwordConfirmationErrorRequired: 'Password confirmation is required',
    slogan: 'A POWERFULL TOOL ALLOWING YOU TO DEVELOP YOUR ARIZ PROJECTS',
    login: 'Log in',
    register: 'Sign up',
    forgotPassword: 'Forgot password?'
  };

  fr: ISigninLanguage = {
    email: 'Email',
    name: 'Nom d\'utilisateur',
    password: 'Mot de passe',
    submit: 'Envoyer',
    emailErrorPattern: 'Veuillez entrer une adresse email valide',
    emailErrorRequired: 'L\'email est obligatoire',
    nameErrorRequired: 'Le nom d\'utilisateur est obligatoire',
    passwordRequired: 'Le mot de passe est obligatoire',
    passwordToShort: 'Votre mot de passe doit contenir au moins 6 caractères',
    passwordNoNumber: 'Votre mot de passe doit contenir au moins 1 nombre',
    passwordNoNormalCase: 'Votre mot de passe doit contenir au moins 1 caractère minuscule',
    passwordNoUpperCase: 'Votre mot de passe doit contenir au moins 1 caractère majuscule',
    passwordConfirmation: 'Confirmation de mot de passe',
    passwordConfirmationErrorRequired: 'Confirmation de mot de passe obligatoire',
    slogan: 'UN OUTIL PUISSANT VOUS PERMETTANT DE DÉVELOPPER VOS PROJETS ARIZ',
    login: 'Se connecter',
    register: 'S\'inscrire',
    forgotPassword: 'Mot de passe oublié ?'
  };
}
