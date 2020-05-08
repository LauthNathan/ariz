export interface IStepOneLanguage {
  chooseStep: string;
  steps: any[];
}

export class StepOneLanguage {
  eng: IStepOneLanguage = {
    chooseStep: 'Please choose one of the following steps :',
    steps: [
      'one',
      'two'
    ]
  };

  fr: IStepOneLanguage = {
    chooseStep: 'Veuillez choisir l\'une des étapes suivantes :',
    steps: [
      {step: '1. Reformuler simplement le problème et ses caractéristiques', number: 'one'},
      {step: '2. Définir l\'objet et l\'outil', number: 'two'},
      {step: '3. Représenter graphiquement les CT1 et CT2', number: 'three'},
      {step: '4. Sélectionner, parmi les schémas A et B de conflit, celui qui assure le mieux la FPS', number: 'four'},
      {step: '5. Intensifier le conflit', number: 'five'},
      {step: '6. Formuler le modèle de problème', number: 'six'},
      {step: '7. Vérifier si le problème peut être résolu à l\'aide des standards', number: 'seven'}
    ]
  };
}
