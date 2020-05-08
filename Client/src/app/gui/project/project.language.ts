export interface StepNode {
  name: string;
  children?: StepNode[];
  link: string;
}

export interface IProjectLanguage {
  steps: StepNode[];
}

export class ProjectLanguage {

  eng: IProjectLanguage = {
    steps: [
      {
        name: 'Etape 1 : Analyser le problème',
        children: [
          {
            name: '1. Reformuler simplement le problème et ses caractéristiques',
            link: ''
          },
          {
            name: '2. Définir l\'objet et l\'outil',
            link: ''
          },
          {
            name: '3. Représenter graphiquement les CT1 et CT2',
            link: ''
          },
          {
            name: '4. Sélectionner, parmi les schémas A et B de conflit, celui qui assure le mieux la FPS',
            link: ''
          },
          {
            name: '5. Intensifier le conflit',
            link: ''
          },
          {
            name: '6. Formuler le modèle de problème',
            link: ''
          },
          {
            name: '7. Vérifier si le problème peut être résolu à l\'aide des standards',
            link: ''
          }
        ],
        link: ''
      },
      {
        name: 'Etape 2 : Analyser le modèle de problème',
        children: [
          {
            name: '1. Définir la zone opératoire (ZO)',
            link: ''
          },
          {
            name: '2. Définir la période opératoire (PO)',
            link: ''
          },
          {
            name: '3. Définir et lister les ressources vépoles du système',
            link: ''
          },
        ],
        link: ''
      },
      {
        name: 'Etape 3 : Définir le RIF & la contradiction physique',
        children: [
          {
            name: '1. Définir le RIF-1',
            link: ''
          },
          {
            name: '2. Renforcer la formulation du RIF-1',
            link: ''
          },
          {
            name: '3. Définir la contradiction physique au macroniveau',
            link: ''
          },
          {
            name: '4. Définir la contradiction physique au microniveau',
            link: ''
          },
          {
            name: '5. Définir le RIF-2',
            link: ''
          },
          {
            name: '6. Vérifier si l\'on peut résoudre le problème formulé en 3.5 à l\'aide des standards',
            link: ''
          }
        ],
        link: ''
      },
      {
        name: 'Etape 4 : Appliquer les ressources substances/champs',
        children: [
          {
            name: '1. Modéliser le problème en utilisant les hommes miniatures',
            link: ''
          },
          {
            name: '2. Faire un « pas en arrière » par rapport au RIF',
            link: ''
          },
          {
            name: '3. Résoudre le problème en utilisant un mélange substances/ressources',
            link: ''
          },
          {
            name: '4. Substituer les substances/ressources présentes par du vide',
            link: ''
          },
          {
            name: '5. Résoudre par l\'utilisation de substances dérivées des substances/ressources',
            link: ''
          },
          {
            name: '6. Résoudre par l\'introduction d\'un champ électrique ou d\'une interaction',
            link: ''
          },
          {
            name: '7. Utiliser l\'ajout de couples Champ/Substance',
            link: ''
          }
        ],
        link: ''
      },
      {
        name: 'Etape 5 : Appliquer les bases de données',
        children: [
          {
            name: '1. Résoudre le problème à l\'aide des standards (issu du RIF2 et avec les RVP)',
            link: ''
          },
          {
            name: '2. Résoudre le problème par analogie avec d\'autres déjà résolus à l\'aide d\'ARIZ-85C',
            link: ''
          },
          {
            name: '3. Eliminer les Contradictions Physiques à l\'aide de méthodes d\'élimination types',
            link: ''
          },
          {
            name: '4. Utiliser les pointeurs vers les effets et phénomènes physiques',
            link: ''
          }
        ],
        link: ''
      },
      {
        name: 'Etape 6 : Modifier le problème',
        children: [
          {
            name: '1. Passer d\'une réponse physique à une réponse technique',
            link: ''
          },
          {
            name: '2. Modifier l\'étape 1.1 en séparant les problèmes',
            link: ''
          },
          {
            name: '3. Changer de problème en choisissant à l\'étape 1.4 une autre CT',
            link: ''
          },
          {
            name: '4. Reformuler le problème simple en l\'attribuant à un supersystème',
            link: ''
          }
        ],
        link: ''
      },
      {
        name: 'Etape 7 : Analyser la réponse',
        children: [
          {
            name: '1. Contrôler la réponse',
            link: ''
          },
          {
            name: '2. Pré-évaluer la réponse obtenue',
            link: ''
          },
          {
            name: '3. Vérifier nouveauté de la réponse obtenue',
            link: ''
          },
          {
            name: '4. Poser les sous-problèmes liés au développement technique de l\'idée',
            link: ''
          }
        ],
        link: ''
      },
      {
        name: 'Etape 8 : Mettre en œuvre au-delà du problème',
        children: [
          {
            name: '1. Spécifier ce qu\'il est nécessaire de modifier dans le supersystème',
            link: ''
          },
          {
            name: '2. Vérifier si le système modifié (ou le supersystème) possède de nouvelles propriétés',
            link: ''
          },
          {
            name: '3. Utiliser la solution pour résoudre d\'autres problèmes techniques',
            link: ''
          }
        ],
        link: ''
      },
      {
        name: 'Etape 9 : Faire le bilan, capitaliser',
        children: [
          {
            name: '1. Comparer le déroulement réel et le déroulement théorique d\'ARIZ ',
            link: ''
          },
          {
            name: '2. Comparer la réponse obtenue',
            link: ''
          }
        ],
        link: ''
      }
    ]
  };

  fr: IProjectLanguage = {
    steps: [
      {
        name: 'Etape 1 : Analyser le problème',
        children: [
          {
            name: '1. Reformuler simplement le problème et ses caractéristiques',
            link: 'one/one'
          },
          {
            name: '2. Définir l\'objet et l\'outil',
            link: 'one/two'
          },
          {
            name: '3. Représenter graphiquement les CT1 et CT2',
            link: 'one/three'
          },
          {
            name: '4. Sélectionner, parmi les schémas A et B de conflit, celui qui assure le mieux la FPS',
            link: 'one/four'
          },
          {
            name: '5. Intensifier le conflit',
            link: 'one/five'
          },
          {
            name: '6. Formuler le modèle de problème',
            link: 'one/six'
          },
          {
            name: '7. Vérifier si le problème peut être résolu à l\'aide des standards',
            link: 'one/seven'
          }
        ],
        link: 'one'
      },
      {
        name: 'Etape 2 : Analyser le modèle de problème',
        children: [
          {
            name: '1. Définir la zone opératoire (ZO)',
            link: 'two/one'
          },
          {
            name: '2. Définir la période opératoire (PO)',
            link: 'two/two'
          },
          {
            name: '3. Définir et lister les ressources vépoles du système',
            link: 'two/three'
          },
        ],
        link: 'two'
      },
      {
        name: 'Etape 3 : Définir le RIF & la contradiction physique',
        children: [
          {
            name: '1. Définir le RIF-1',
            link: 'three/one'
          },
          {
            name: '2. Renforcer la formulation du RIF-1',
            link: 'three/two'
          },
          {
            name: '3. Définir la contradiction physique au macroniveau',
            link: 'three/three'
          },
          {
            name: '4. Définir la contradiction physique au microniveau',
            link: 'three/four'
          },
          {
            name: '5. Définir le RIF-2',
            link: 'three/five'
          },
          {
            name: '6. Vérifier si l\'on peut résoudre le problème formulé en 3.5 à l\'aide des standards',
            link: 'three/six'
          }
        ],
        link: 'three'
      },
      {
        name: 'Etape 4 : Appliquer les ressources substances/champs',
        children: [
          {
            name: '1. Modéliser le problème en utilisant les hommes miniatures',
            link: 'four/one'
          },
          {
            name: '2. Faire un « pas en arrière » par rapport au RIF',
            link: 'four/two'
          },
          {
            name: '3. Résoudre le problème en utilisant un mélange substances/ressources',
            link: 'four/three'
          },
          {
            name: '4. Substituer les substances/ressources présentes par du vide',
            link: 'four/four'
          },
          {
            name: '5. Résoudre par l\'utilisation de substances dérivées des substances/ressources',
            link: 'four/five'
          },
          {
            name: '6. Résoudre par l\'introduction d\'un champ électrique ou d\'une interaction',
            link: 'four/six'
          },
          {
            name: '7. Utiliser l\'ajout de couples Champ/Substance',
            link: 'four/seven'
          }
        ],
        link: 'four'
      },
      {
        name: 'Etape 5 : Appliquer les bases de données',
        children: [
          {
            name: '1. Résoudre le problème à l\'aide des standards (issu du RIF2 et avec les RVP)',
            link: 'five/one'
          },
          {
            name: '2. Résoudre le problème par analogie avec d\'autres déjà résolus à l\'aide d\'ARIZ-85C',
            link: 'five/two'
          },
          {
            name: '3. Eliminer les Contradictions Physiques à l\'aide de méthodes d\'élimination types',
            link: 'five/three'
          },
          {
            name: '4. Utiliser les pointeurs vers les effets et phénomènes physiques',
            link: 'five/four'
          }
        ],
        link: 'five'
      },
      {
        name: 'Etape 6 : Modifier le problème',
        children: [
          {
            name: '1. Passer d\'une réponse physique à une réponse technique',
            link: 'six/one'
          },
          {
            name: '2. Modifier l\'étape 1.1 en séparant les problèmes',
            link: 'six/two'
          },
          {
            name: '3. Changer de problème en choisissant à l\'étape 1.4 une autre CT',
            link: 'six/three'
          },
          {
            name: '4. Reformuler le problème simple en l\'attribuant à un supersystème',
            link: 'six/four'
          }
        ],
        link: 'six'
      },
      {
        name: 'Etape 7 : Analyser la réponse',
        children: [
          {
            name: '1. Contrôler la réponse',
            link: 'seven/one'
          },
          {
            name: '2. Pré-évaluer la réponse obtenue',
            link: 'seven/two'
          },
          {
            name: '3. Vérifier nouveauté de la réponse obtenue',
            link: 'seven/three'
          },
          {
            name: '4. Poser les sous-problèmes liés au développement technique de l\'idée',
            link: 'seven/four'
          }
        ],
        link: 'seven'
      },
      {
        name: 'Etape 8 : Mettre en œuvre au-delà du problème',
        children: [
          {
            name: '1. Spécifier ce qu\'il est nécessaire de modifier dans le supersystème',
            link: 'height/one'
          },
          {
            name: '2. Vérifier si le système modifié (ou le supersystème) possède de nouvelles propriétés',
            link: 'height/two'
          },
          {
            name: '3. Utiliser la solution pour résoudre d\'autres problèmes techniques',
            link: 'height/three'
          }
        ],
        link: 'height'
      },
      {
        name: 'Etape 9 : Faire le bilan, capitaliser',
        children: [
          {
            name: '1. Comparer le déroulement réel et le déroulement théorique d\'ARIZ ',
            link: 'nine/one'
          },
          {
            name: '2. Comparer la réponse obtenue',
            link: 'nine/two'
          }
        ],
        link: 'nine'
      }
    ]
  };
}
