import { IOne, One, Two, Three } from './steps/part-one';


/**
 * Test Step 1
 * @param data Project data
 */
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

/**
 * Test Step 2
 * @param data Project data
 */
function step2(data: Two): Two {
  return {
    help: 'Help',
    comment: data.comment,
    mainFunction: data.mainFunction,
    conflictingPair: data.conflictingPair
  };
}

/**
 * Test Step 3
 * @param data Project data
 */
function step3(data: Three): Three {
  return {
    help: 'Help',
    comment: data.comment,
    diagrams: data.diagrams
  }
}

// function project() {

// }
