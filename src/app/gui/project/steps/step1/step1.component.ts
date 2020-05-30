import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NumberUtils} from '../../../../utils/number.utils';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  definition = '';
  contradiction = '';
  reformulation = '';
  comment = '';
  showMoreText = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
    const majorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[3]);
    const minorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[4]);
    this.definition = localStorage.getItem('definitionStepOne');
    this.contradiction = localStorage.getItem('contradictionStepOne');
    this.reformulation = localStorage.getItem('reformulationStepOne');
    this.comment = localStorage.getItem('commentStepOne');
  }

    /**
   * Get the value of the comment send by the comment component and set it to the variable here.
   *
   * @param comment - The comment from commentComponent.
   */
  setComment(comment: string): void {
    this.comment = comment;
    localStorage.setItem('commentStepOne', comment);
  }

  /**
   * Set the definition to the localstorage.
   */
  setDefinition(): void {
    localStorage.setItem('definitionStepOne', this.definition);
  }

  /**
   * Set the contradiction to the localstorage.
   */
  setContradiction(): void {
    localStorage.setItem('contradictionStepOne', this.contradiction);
  }

  /**
   * Set the reformulation to the localstorage.
   */
  setReformulation(): void {
    localStorage.setItem('reformulationStepOne', this.reformulation);
  }
}
