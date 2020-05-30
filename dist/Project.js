"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function step1(data) {
    return {
        help: 'Help',
        comment: data.comment,
        system: data.system,
        mainFunction: data.mainFunction,
        mainParts: data.mainParts,
        miniProblem: data.miniProblem
    };
}
function step2(data) {
    return {
        help: 'Help',
        comment: data.comment,
        mainFunction: data.mainFunction,
        conflictingPair: data.conflictingPair
    };
}
function step3(data) {
    return {
        help: 'Help',
        comment: data.comment,
        diagrams: data.diagrams
    };
}
//# sourceMappingURL=Project.js.map