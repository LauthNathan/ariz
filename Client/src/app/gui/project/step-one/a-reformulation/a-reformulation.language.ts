export interface IAReformulationLanguage {
  title: string;
  comment: string;
  help: string;
  question: string;
}

export class AReformulationLanguage {
  eng: IAReformulationLanguage = {
    title: '1. Put in other words the problem and its caracteristics',
    comment: 'Comment',
    help: 'Help',
    question: 'Enoncer la phrase de reformulation du problème : Il faut (définir le résultat à atteindre) ' +
      'avec un minimum de modifications dans le système.'
  };

  fr: IAReformulationLanguage = {
    title: '1. Reformuler simplement le problème et ses caractéristiques',
    comment: 'Commentaire',
    help: 'Aide',
    question: 'Enoncer la phrase de reformulation du problème : Il faut (définir le résultat à atteindre) ' +
      'avec un minimum de modifications dans le système.'
  };
}
