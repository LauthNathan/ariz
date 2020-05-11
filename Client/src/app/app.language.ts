export interface IAppLanguage {
  login: string;
  signUp: string;
}

export class AppLanguage {
  gb: IAppLanguage = {
    login: 'Log In',
    signUp: 'Sign Up'
  };

  fr: IAppLanguage = {
    login: 'Connexion',
    signUp: 'Inscription'
  };
}
