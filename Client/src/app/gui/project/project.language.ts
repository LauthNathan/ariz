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
        name: 'Step 1 : Anaylyse the problem',
        children: [
          {
            name: '1. Put in other words the problem and its caracteristics',
            link: 'one/one'
          },
          {
            name: '2. Define the object and the tool',
            link: 'one/two'
          },
          {
            name: '3. Represent graphically TC1 and TC2',
            link: 'one/three'
          },
          {
            name: '4. Select, between the conflict\'s diagram A and B, the one who perform the best the basic function',
            link: 'one/four'
          },
          {
            name: '5. Intensify the conflict',
            link: 'one/five'
          },
          {
            name: '6. Find the problem\'s template',
            link: 'one/six'
          },
          {
            name: '7. Check if the problem can be solved through the standards',
            link: 'one/seven'
          }
        ],
        link: 'one/one'
      },
      {
        name: 'Step 2 : Analyse the problem\'s type',
        children: [
          {
            name: '1. Define the operation zone',
            link: 'two/one'
          },
          {
            name: '2. Define the operation time',
            link: 'two/two'
          },
          {
            name: '3. Define and list the system\'s Su-Field ressources',
            link: 'two/three'
          },
        ],
        link: 'two/one'
      },
      {
        name: 'Etape 3 : Define the ideal final result and the physical contradiction',
        children: [
          {
            name: '1. Define the first ideal final result',
            link: 'three/one'
          },
          {
            name: '2. Reinforce your definition of the first ideal result',
            link: 'three/two'
          },
          {
            name: '3. Define the physical contradiction at a macrolevel',
            link: 'three/three'
          },
          {
            name: '4. Define the physical contradiction at a microlevel',
            link: 'three/four'
          },
          {
            name: '5. Define the second ideal final result',
            link: 'three/five'
          },
          {
            name: '6. Check if we can solve the problem found on 3.5 with the standards',
            link: 'three/six'
          }
        ],
        link: 'three/one'
      },
      {
        name: 'Step 4 : Apply the Su-Field ressources',
        children: [
          {
            name: '1. Model the problem through the "little mens" technique',
            link: 'four/one'
          },
          {
            name: '2. Take a step back compared to the ideal final result',
            link: 'four/two'
          },
          {
            name: '3. Try to solve the problem using a Su-Field mix',
            link: 'four/three'
          },
          {
            name: '4. Replace the existing ressources/substances with void',
            link: 'four/four'
          },
          {
            name: '5. Solve using derivated substances of the current ressources/substances',
            link: 'four/five'
          },
          {
            name: '6. Solve by introducing a magnetic field or a new interaction',
            link: 'four/six'
          },
          {
            name: '7. Use an adding of Su-Field couples',
            link: 'four/seven'
          }
        ],
        link: 'four/one'
      },
      {
        name: 'Step 5 : Apply the databases',
        children: [
          {
            name: '1. Solve the problem through the standards (coming from the second ideal final resulat with the Su-Field ressources)',
            link: 'five/one'
          },
          {
            name: '2. Solve the problem by comparing it with other problems already solved with ARIZ-85-C',
            link: 'five/two'
          },
          {
            name: '3. Get rid of the physical contradictions with the classic elminiation method',
            link: 'five/three'
          },
          {
            name: '4. Use the pointers the the physical effects and phenomenons',
            link: 'five/four'
          }
        ],
        link: 'five/one'
      },
      {
        name: 'Step 6 : Modify the problem',
        children: [
          {
            name: '1. Move from a physical answer to a technical one',
            link: 'six/one'
          },
          {
            name: '2. Modify the step 1.1 by separating the problems',
            link: 'six/two'
          },
          {
            name: '3. Change the problem by picking the step 1.4 from another TC',
            link: 'six/three'
          },
          {
            name: '4. Reformulate the simple problem by attributing it to a supersystem',
            link: 'six/four'
          }
        ],
        link: 'six/one'
      },
      {
        name: 'Step 7 : Analyse the answer',
        children: [
          {
            name: '1. Control the answer',
            link: 'seven/one'
          },
          {
            name: '2. Evaluate a first time the obtained answer',
            link: 'seven/two'
          },
          {
            name: '3. Check again the obtained answer',
            link: 'seven/three'
          },
          {
            name: '4. A sk yourself the sub-problems linked to the idea\'s technical development',
            link: 'seven/four'
          }
        ],
        link: 'seven/one'
      },
      {
        name: 'Step 8 : Go further away than the problem',
        children: [
          {
            name: '1. Specifiy what we need to change in the supersystem',
            link: 'height/one'
          },
          {
            name: '2. Check if the modified system (or the supersystem) got new properties',
            link: 'height/two'
          },
          {
            name: '3. Use the solution to solve other technical problems',
            link: 'height/three'
          }
        ],
        link: 'height/one'
      },
      {
        name: 'Step 9 : Conclude, capitalize',
        children: [
          {
            name: '1. Compare the real progress to the ARIZ\'s theorical progress',
            link: 'nine/one'
          },
          {
            name: '2. Compare the obtained answer',
            link: 'nine/two'
          }
        ],
        link: 'nine/one'
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
        link: 'one/one'
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
        link: 'two/one'
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
        link: 'three/one'
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
        link: 'four/one'
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
        link: 'five/one'
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
        link: 'six/one'
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
        link: 'seven/one'
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
        link: 'height/one'
      },
      {
        name: 'Etape 9 : Faire le bilan, capitaliser',
        children: [
          {
            name: '1. Comparer le déroulement réel et le déroulement théorique d\'ARIZ',
            link: 'nine/one'
          },
          {
            name: '2. Comparer la réponse obtenue',
            link: 'nine/two'
          }
        ],
        link: 'nine/one'
      }
    ]
  };
}
