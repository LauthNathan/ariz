export interface IBDefinitionLanguage {
  title: string;
  comment: string;
  help: string;
  question: string;
}

export class BDefinitionLanguage {
  eng: IBDefinitionLanguage = {
    title: '2. Définir l\'objet et l\'outil',
    comment: 'Commentaire',
    help: 'Aide',
    question: 'Définir et noter le couple d\'éléments en conflit : l\'objet et l\'outil'
  };

  fr: IBDefinitionLanguage = {
    title: '2. Définir l\'objet et l\'outil',
    comment: 'Commentaire',
    help: 'Aide',
    question: 'Définir et noter le couple d\'éléments en conflit : l\'objet et l\'outil'
  };
}
