export interface IAppLanguage {
  login: string;
  signin: string;
}

export class AppLanguage {
  eng: IAppLanguage = {
    login: 'Login',
    signin: 'Signin'
  };

  fr: IAppLanguage = {
    login: 'Connexion',
    signin: 'Inscription'
  };
}
