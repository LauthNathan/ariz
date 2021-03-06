import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NumberUtils} from '../../../../utils/number.utils';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss']
})
export class Step6Component implements OnInit {
  comment = '';
  showMoreText = '';
  elements = [];
  conflict = '';
  result = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
    const majorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[3]);
    const minorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[4]);
    // TODO: récupérer les éléments du localStorage
    this.elements.push(localStorage.getItem('objectStepTwo'));
    this.elements.push(localStorage.getItem('toolStepTwo'));
    // TODO: récupérer le conflit intensifié de l'étape précédente du localStorage
    this.conflict = localStorage.getItem('intensifyConflictStepFive');
    this.comment = localStorage.getItem('commentStepSix');
    this.result = localStorage.getItem('resultStepSix');
  }

  /**
   * Converts a number to its corresponding alphabet letter
   * @param nb The number of alphabet (0=>A)
   */
  nbToAlphabet(nb: number) {
    return String.fromCharCode(nb+65);
  }

    /**
   * Get the value of the comment send by the comment component and set it to the variable here.
   *
   * @param comment - The comment from commentComponent.
   */
  setComment(comment: string): void {
    this.comment = comment;
    localStorage.setItem('commentStepSix', comment);
  }

  /**
   * Set conflict to the localstorage.
   */
  setConflict(): void {
    localStorage.setItem('intensifyConflictStepFive', this.conflict);
  }

  setResult(): void {
    localStorage.setItem('resultStepSix', this.result);
  }
}
