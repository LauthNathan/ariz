import {Component, OnInit} from '@angular/core';
import {IStepsLanguage, StepsLanguage} from '../../steps.language';
import {Router} from '@angular/router';
import {NumberUtils} from '../../../../../utils/number.utils';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss']
})
export class BasicInputComponent implements OnInit {

  basicInputText: IStepsLanguage;
  comment = '';
  showMoreText = '';

  constructor(private readonly stepsLanguage: StepsLanguage, private router: Router) {
  }

  ngOnInit() {
    const majorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[3]);
    const minorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[4]);
    this.basicInputText = this.stepsLanguage[localStorage.getItem('arizToolLanguageCode')][majorStep - 1][minorStep - 1];
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
