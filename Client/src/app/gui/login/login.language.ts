export interface ILoginLanguage {
  email: string;
  password: string;
  submit: string;
  emailErrorPattern: string;
  emailErrorRequired: string;
  passwordRequired: string;
}

export class LoginLanguage {
  eng: ILoginLanguage = {
    email: 'Email',
    password: 'Password',
    submit: 'Submit',
    emailErrorPattern: 'Please enter a valid email address',
    emailErrorRequired: 'Email is required',
    passwordRequired: 'Password is required'
  };

  fr: ILoginLanguage = {
    email: 'Email',
    password: 'Mot de passe',
    submit: 'Envoyer',
    emailErrorPattern: 'Veuillez entrer une adresse email valide',
    emailErrorRequired: 'L\'email est obligatoire',
    passwordRequired: 'Le mot de passe est obligatoire'
  };
}
