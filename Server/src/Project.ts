import { IOne, One, Two, Three } from './steps/part-one';

function step1(data: One): One {
  return {
    help: 'Help',
    comment: data.comment,
    system: data.system,
    mainFunction: data.mainFunction,
    mainParts: data.mainParts,
    miniProblem: data.miniProblem
  };
}

function step2(data: Two): Two {
  return {
    help: 'Help',
    comment: data.comment,
    mainFunction: data.mainFunction,
    conflictingPair: data.conflictingPair
  };
}

function step3(data: Three): Three {
  return {
    help: 'Help',
    comment: data.comment,
    diagrams: data.diagrams
  }
}

function project() {

}
