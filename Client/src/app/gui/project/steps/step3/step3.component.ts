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

  constructor(private router: Router) {
  }

  ngOnInit() {
    const majorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[3]);
    const minorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[4]);
  }

    /**
   * Get the value of the comment send by the comment component and set it to the variable here.
   *
   * @param comment - The comment from commentComponent.
   */
  setComment(comment: string) {
    this.comment = comment;
  }
}
