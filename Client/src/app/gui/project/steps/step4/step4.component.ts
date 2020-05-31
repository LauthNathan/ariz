import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NumberUtils} from '../../../../utils/number.utils';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {
  comment = '';
  showMoreText = '';
  ct1 = '';
  ct2 = '';
  selectedCt = '';
  majorStep: number;
  minorStep: number;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.majorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[3]);
    this.minorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[4]);
    // TODO: récupérer les CT de l'étape précédente du localStorage
    this.ct1 = localStorage.getItem('ctOneStepThree');
    this.ct2 = localStorage.getItem('ctTwoStepThree');
    this.selectedCt = localStorage.getItem('selectedCtStepFour');
    this.comment = localStorage.getItem('commentStepFour');
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
  setComment(comment: string) {
    this.comment = comment;
    localStorage.setItem('commentStepFour', comment);
  }

  /**
   * Set the selected ct in the localstorage.
   */
  setSelectedCt(): void {
    localStorage.setItem('selectedCtStepFour', this.selectedCt);
  }
}
