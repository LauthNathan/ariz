import { ONE_ONE_HELP } from '../constants';
/*
1. definition of mini-problem
2. selection of conflicting pair
3. formulation of system contradictions
4. selection of one system contradiction for development
5. reinforcement (intensification) of conflict
6. generation of a specified mini-problem model
7. use of the System of Standards to solve the specific mini-problem model
*/

export interface IOne {
  one: One;
  two: Two;
  three: Three;
  five: Five;
}

export interface One extends General {
  miniProblem: string;
  system: string;
  mainParts: string[];
  mainFunction: string;
}

export interface Two extends General {
  conflictingPair: ConflictingPair;
  mainFunction: string;
}

export interface Three extends General {
  diagrams: Diagram[];
}

export interface Five extends General {
  diagram: Diagram;
  mainFunction: string;
}

export interface Six extends General {

}

interface General {
  help?: string;
  comment?: string;
}

interface ConflictingPair {
  tools: Tool[];
  products: string[];
}

interface Tool {
  name: string;
  states: string[];
}

interface Link {
  type: string;
  value: string;
  items: string[];
}

interface Diagram {
  name: string;
  tool: Tool;
  products: string[];
  links: Link[];
}
