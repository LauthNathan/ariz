import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NumberUtils} from '../../../../utils/number.utils';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  comment = '';
  showMoreText = '';
  object = '';
  tool = '';
  majorStep: number;
  minorStep: number;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.majorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[3]);
    this.minorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[4]);
    this.object = localStorage.getItem('objectStepTwo');
    this.tool = localStorage.getItem('toolStepTwo');
    this.comment = localStorage.getItem('commentStepTwo');
  }

    /**
   * Get the value of the comment send by the comment component and set it to the variable here.
   *
   * @param comment - The comment from commentComponent.
   */
  setComment(comment: string) {
    this.comment = comment;
    localStorage.setItem('commentStepTwo', comment);
  }

  /**
   * Set object in the localstorage.
   */
  setObject(): void {
    localStorage.setItem('objectStepTwo', this.object);
  }

  /**
   * Set tool in the localstorage.
   */
  setTool(): void {
    localStorage.setItem('toolStepTwo', this.tool);
  }
}
