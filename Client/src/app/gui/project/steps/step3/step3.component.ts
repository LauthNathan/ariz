import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NumberUtils} from '../../../../utils/number.utils';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  comment = '';
  showMoreText = '';
  schema = '';
  ct1 = '';
  ct2 = '';
  firstLink = '';
  secondLink = '';
  majorStep: number;
  minorStep: number;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.majorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[3]);
    this.minorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[4]);
    this.comment = localStorage.getItem('commentStepThree');
    this.schema = localStorage.getItem('schemaStepThree');
    this.ct1 = localStorage.getItem('ctOneStepThree');
    this.ct2 = localStorage.getItem('ctTwoStepThree');
    let links = JSON.parse(localStorage.getItem('linksStepThree'));
    if (links) {
      this.firstLink = links[0];
      this.secondLink = links[1];
    }
  }

    /**
   * Get the value of the comment send by the comment component and set it to the variable here.
   *
   * @param comment - The comment from commentComponent.
   */
  setComment(comment: string) {
    this.comment = comment;
    localStorage.setItem('commentStepThree', comment);
  }

  /**
   * Set the schema in the localstorage.
   */
  setSchema(): void {
    localStorage.setItem('schemaStepThree', this.schema);
  }

  /**
   * Set the ct1 in the localstorage.
   */
  setCt1(): void {
    localStorage.setItem('ctOneStepThree', this.ct1);
  }

  /**
   * Set the ct2 in the localstorage.
   */
  setCt2(): void {
    localStorage.setItem('ctTwoStepThree', this.ct2);
  }

  /**
   * Set the links in the localstorage.
   */
  setLinks(): void {
    let links = [this.firstLink, this.secondLink];
    localStorage.setItem('linksStepThree', JSON.stringify(links));
  }
}
